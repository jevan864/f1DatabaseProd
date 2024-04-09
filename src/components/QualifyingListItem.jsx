



const QualifyingListItem = (props) =>{
	const openDriverDetails = () =>{
		props.modal("Driver", props.data.drivers.driverRef);
	}
	const openConstructorDetails = () =>{
		props.modal("Constructor", props.data.constructors.constructorRef);
	}
	return(
		<li className="border-2 border-sky-300 flex items-center">
				<div className="flex justify-items-start w-8">
					<div className="border-x-2 border-sky-300 justify-items-start w-8">{props.data.position}</div>
				</div>

				<div className="flex grid grid-cols-6 w-full">
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
				<div>{props.data.q1}</div>
				<div>{props.data.q2}</div>
				<div>{props.data.q3}</div>
			</div>
		</li>
	)
}

export default QualifyingListItem;