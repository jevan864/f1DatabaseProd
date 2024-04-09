import { useState, useEffect } from 'react'
import Header from './Header'
import MainView from './MainView'
import RightDrawer from './RightDrawer'
import About from './About'
import MDialog from './MDialog'
import FavModal from './FavModal'



const MainPageWH = (props) =>{
	const [szn, setSzn] = useState(0) //primary key is Year
	const [szns, setSzns] = useState([]) 
	const [openAbout, setOpenAbout] = useState(false);
	const [openFavs, setOpenFavs] = useState(false);
	const [openMD, setOpenMD] = useState(false);
	const [MDtype, setMDType] = useState(0);
	const [MDData, setMDdata] = useState([[{name:"", nationality:"", year:"", date:"", url:""}]]);
	const [favDriv, setFavDriv] = useState([]);
	const [favCons, setFavCons] = useState([]);
	const [favCirc, setFavCirc] = useState([]);

	const openDrawerA = () => setOpenAbout(true);

	const changeMD=(type, id)=>{
		setMDdata([{name:"", nationality:"", year:"", date:"", url:""}]);
		const pathPiece = type.toLowerCase();
		const url = "https://jevan-f1-api.glitch.me/api/" + pathPiece +"/"+id;
		fetch (url,{mode:'cors'})
		.then( resp => resp.json() )
		.then( data => { setMDdata(data); })
		setOpenMD(true);
		setMDType(type);
	}
	const addFav=()=>{
		const type = MDtype.toLowerCase();
		if(type=="driver"){
			if(favDriv.length <= 0 || !favDriv.find(d => d.driverRef == MDData[0].driverRef)){ 
				// Create a new array with existing favorites and the selected movie
			   const newFavDriv = [...favDriv, MDData[0]];
			   setFavDriv(newFavDriv)
		   }
		}
		else if(type=="constructor"){
			if(favCons.length <= 0 || !favCons.find(c => c.constructorRef == MDData[0].constructorRef)){ 
			   const newFavCons = [...favCons, MDData[0]];
			   setFavCons(newFavCons)
		   }
		}
		else{ // Circuit
			if(favCirc.length <= 0 || !favCirc.find(c => c.circuitRef == MDData[0].circuitRef)){ 
				const newFavCirc = [...favCirc, MDData[0]];
				setFavCirc(newFavCirc)
		   }
		}
	}
	const emptyFavs = () =>{
		setFavDriv([]);
		setFavCons([]);
		setFavCirc([]);
	}
// consuming assignment #1 APIs
	useEffect( () => {
		const url = "https://jevan-f1-api.glitch.me/api/seasons";
		fetch (url,{mode:'cors'})
		.then( resp => resp.json() )
		.then( data => { setSzns(data.filter(s=>s.year>=2000 && s.year<2024)); })
	}, [] );	
	
	const sznChange = (newszn)=>{
		setSzn(newszn);
	}
	
	if(szn){
		return(
			<div className='overflow-y-auto container min-w-full h-full flex flex-col content-normal bg-color-black text-white'>
				<div className='container min-w-full h-full flex flex-col items-start content-normal bg-color-black text-white'>
					<Header data={szns} update={sznChange} log={props.update} about={openDrawerA} favs={setOpenFavs}/>
					<MainView data={szn} modal={changeMD}/>
				</div>
				<RightDrawer open={openAbout} update={setOpenAbout} content={<About/>}/>
				<MDialog open={openMD} update={setOpenMD} type={MDtype} data={MDData} fav={addFav}/>
				<FavModal open={openFavs} update={setOpenFavs} drivers={favDriv} cons={favCons} circ={favCirc} fav={emptyFavs}/>
			</div>
		);
	}
	else{
		return(
			<div className='container min-w-full h-full flex flex-col content-normal bg-color-black text-white'>
				<div className='container min-w-full h-full flex flex-col items-start content-normal bg-color-black text-white'>
					<Header data={szns} update={sznChange} log={props.update} about={openDrawerA} favs={setOpenFavs}/>
				</div>
				<RightDrawer open={openAbout} update={setOpenAbout} content={<About/>}/>
				<FavModal open={openFavs} update={setOpenFavs} drivers={favDriv} cons={favCons} circ={favCirc} fav={emptyFavs}/>
			</div>
		);
	}
}

export default MainPageWH;