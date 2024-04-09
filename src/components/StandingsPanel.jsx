import ConstructorsList from './ConstructorsList.jsx';
import DriversList from './DriversList.jsx';
import { useState, useEffect } from 'react'


const StandingsPanel = (props) =>{
	const [driverSt, setDriverSt] = useState([]) 
	const [consSt, setConsSt] = useState([]) 

	useEffect( () => {
		const url1 = "https://jevan-f1-api.glitch.me/api/standings/" + props.data + "/drivers";
		const url2 = "https://jevan-f1-api.glitch.me/api/standings/" + props.data + "/constructors";
		fetch (url1,{mode:'cors'})
		.then( resp => resp.json() )
		.then( data => { setDriverSt(data); })

		fetch (url2,{mode:'cors'})
		.then( resp => resp.json() )
		.then( data => { setConsSt(data); })
	}, [props.data] );

	return(
		<div className='flex w-full gap-2 justify-items-stretch content-start grid grid-cols-1 border-2 border-blue-800'>
			<div className='w-full justify-self-center h-12'>
				<div className='font-bold text-lg'>
					Standings
				</div>
				<div>
					{"after round " + props.round}
				</div>
			</div>
			<div className='flex justify-items-stretch grid grid-cols-2'>
				<div>
					<DriversList data={driverSt} modal={props.modal}/>
				</div>
				<div>
					<ConstructorsList data={consSt} modal={props.modal}/>
				</div>
			</div>
		</div>
	)
}

export default StandingsPanel;