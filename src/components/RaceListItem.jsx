



const RaceListItem = (props) =>{
	const btnHandle = (e)=>{
		if(e.target.name == "results"){
			props.update(props.race.raceId, true, props.race.round);
		}
		else{
			props.update(props.race.raceId, false, props.race.round);
		}
	}

	return(
		<li className="border-2 border-sky-300 grid grid-cols-2 justify-items-stretch">
			<div className="w-full flex justify-items-start gap-4">
				<div className="border-x-2 border-sky-300 justify-items-start w-8">{props.race.round}</div>
				<div>{props.race.name}</div>
			</div>
			<div className="grid justify-self-end align-middle grid-cols-2">
				<div>
				<button name="results" className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-1 px-3 bg-sky-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button" onClick={btnHandle}>
					Results
				</button>
				</div>
				<div>
				<button name="standings" className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-1 px-3 bg-sky-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button" onClick={btnHandle}>
					Standings
				</button>
				</div>
			</div>
		</li>
	)
}

export default RaceListItem;