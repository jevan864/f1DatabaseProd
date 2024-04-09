import RaceList from './RaceList.jsx';
import ResultsPanel from './ResultsPanel.jsx';
import StandingsPanel from './StandingsPanel.jsx';
import { useState, useEffect } from 'react'




const MainView = (props) =>{
	const [displayResults, setDisplayResults] = useState(true) //display standings when false
	const [selectedRace, setSelectedRace] = useState(0) //RaceId starts at 1 so 0 is fair for default val.
	const [rnd, setRnd] = useState(0) //needed for header of standings panel
	const [races, setRaces] = useState([]) 


	useEffect( () => {
		//updates state-races
		setSelectedRace(0);
		const url = "https://jevan-f1-api.glitch.me/api/races/season/" + props.data;
		fetch (url,{mode:'cors'})
		.then( resp => resp.json() )
		.then( data => { setRaces(data); })
	}, [props.data] );

	const changePanel = (raceId, results, round)=>{
		setDisplayResults(results);
		setSelectedRace(raceId);
		setRnd(round);
	}
	if(selectedRace == 0){ //no race selected -- only show race list
		return(
			<div className='mt-4 w-full h-full grid grid-cols-2'>
				<RaceList season={props.data} data={races} update={changePanel}/>
			</div>
		)
	}
	else{
	if(displayResults){ //display results panel
		return(
			<div className='mt-4 w-full h-full grid grid-cols-2 gap-4'>
				<RaceList season={props.data} data={races} update={changePanel}/>
				<ResultsPanel data={selectedRace} modal={props.modal}/>
			</div>
		)
	}
	else{ //display standings panel
		return(
			<div className='mt-4 w-full h-full grid grid-cols-2 gap-4'>
				<RaceList season={props.data} data={races} update={changePanel}/>
				<StandingsPanel data={selectedRace} round={rnd} modal={props.modal}/>
			</div>
		)
	}
	}
}

export default MainView;

