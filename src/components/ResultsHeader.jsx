



const ResultsHeader = (props) =>{
	const openCircuitDetails = () =>{
		props.modal("Circuit", props.race[0].circuitId);
	}

	return(
		<div className="flex flex-row text-lg gap-x-4">
			<div>{props.race[0].name + ","}</div>
			<div>{"Round " + props.race[0].round + ","}</div>
			<div>{props.race[0].year + "," }</div>
			<div>
				<button className="align-text-top align-center py-0 transition-all rounded-lg select-none hover:bg-slate-400/40 active:bg-slate-400/20" type="button" onClick={openCircuitDetails}>
      				{props.race[0].circuits.name}
   				</button>
				{" ,"}
			</div>
			<div>{props.race[0].date + ","}</div>
			<div>
				<a href={props.race[0].url} className="text-blue-500 decoration-blue-600 text-decoration no-underline hover:underline;">
				Race Wiki Link
			</a>
			</div>
		</div>
	)
}

export default ResultsHeader;