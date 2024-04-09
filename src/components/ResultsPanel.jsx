import QualifyingList from './QualifyingList.jsx';
import ResultsList from './ResultsList.jsx';
import { useState, useEffect } from 'react'



const ResultsPanel = (props) =>{
	const [displayResults, setDisplayResults] = useState(true)
	const [qualResults, setQualResults] = useState([]) 
	const [raceResults, setRaceResults] = useState([]) 
	const [raceData, setRaceData] = useState([{name:"", round:"", year:"", date:"", url:"", circuits:{name:""}}]);

	useEffect( () => { //props.data is a raceId
		setRaceData([{name:"", round:"", year:"", date:"", url:"", circuits:{name:""}}]);
		setDisplayResults(true);
		const url1 = "https://jevan-f1-api.glitch.me/api/qualifying/" + props.data;
		const url2 = "https://jevan-f1-api.glitch.me/api/results/" + props.data;
		const url3 = "https://jevan-f1-api.glitch.me/api/races/" + props.data;

		fetch (url3,{mode:'cors'})
		.then( resp => resp.json() )
		.then( data => {setRaceData(data); })

		fetch (url1,{mode:'cors'})
		.then( resp => resp.json() )
		.then( data => { setQualResults(data); })

		fetch (url2,{mode:'cors'})
		.then( resp => resp.json() )
		.then( data => { setRaceResults(data); })
	}, [props.data] );

	const displayChange = ()=>{
		setDisplayResults(!displayResults);
	}

	if(displayResults){
		return(
		<div className='flex w-full gap-2 justify-items-stretch content-start grid grid-cols-1 border-2 border-blue-800'>
			<div className='w-full justify-self-center h-12 mt-2 gap-2'>
				<button className="mx-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full" type="button">
					Results
  				</button>
				<button className="mx-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button" onClick={displayChange}>
    				Qualifying
  				</button>
			</div>
			<div className='flex justify-items-stretch grid grid-cols-1'>
				<div>
					<ResultsList data={raceResults} race={raceData} modal={props.modal}/>
				</div>
			</div>
		</div>
		)
	}
	else{
	return(
		<div className='flex w-full gap-2 justify-items-stretch content-start grid grid-cols-1 border-2 border-blue-800'>
			<div className='w-full justify-self-center h-12 mt-2 gap-2'>
				<button className="mx-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button" onClick={displayChange}>
    				Results
  				</button>
				<button className="mx-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full" type="button">
					Qualifying
  				</button>
			</div>
			<div className='flex justify-items-stretch grid grid-cols-1'>
				<div>
					<QualifyingList data={qualResults} modal={props.modal}/>
				</div>
			</div>
		</div>
	)
}
}

export default ResultsPanel;