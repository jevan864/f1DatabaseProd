



const ResultsListItem = (props) =>{
	const openDriverDetails = () =>{
		props.modal("Driver", props.data.drivers.driverRef);
	}
	const openConstructorDetails = () =>{
		props.modal("Constructor", props.data.constructors.constructorRef);
	}
	return(
		<li className="border-2 border-sky-300 flex items-center">
			<div className="flex justify-items-start w-8">
				<div className="border-x-2 border-sky-300 justify-items-start w-8">{props.data.positionText}</div>
			</div>
			<div className="flex grid grid-cols-5 w-full">
				<div className="justify-self-start justify-items-start col-span-2 ml-2">
					<button className="text-center align-middle transition-all rounded-lg select-none hover:bg-slate-400/40 active:bg-slate-400/20" type="button" onClick={openDriverDetails}>
	      				{props.data.drivers.forename + " " + props.data.drivers.surname}
	   				</button>
				</div>
				<div className="justify-self-start justify-items-start">
					<button className="text-center align-middle transition-all rounded-lg select-none hover:bg-slate-400/40 active:bg-slate-400/20" type="button" onClick={openConstructorDetails}>
						{props.data.constructors.name}
					</button>
				</div>
		
				<div>{props.data.laps}</div>
				<div>{props.data.points}</div>
			</div>
		</li>
	)
}

export default ResultsListItem;