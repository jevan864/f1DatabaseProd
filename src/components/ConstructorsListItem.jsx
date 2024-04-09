



const ConstructorsListItem = (props) =>{
	const openConstructorDetails = () =>{
		props.modal("Constructor", props.data.constructors.constructorRef);
	}
	return(
		<li className="border-2 border-sky-300 grid grid-cols-2">
			<div className="flex justify-items-start">
				<div className="border-x-2 border-sky-300 justify-items-start w-8">{props.data.positionText}</div>
				<div>
					<button className="text-center align-middle transition-all rounded-lg select-none hover:bg-slate-400/40 active:bg-slate-400/20" type="button" onClick={openConstructorDetails}>
						{props.data.constructors.name}
					</button>
				</div>
			</div>
			<div className="w-full justify-self-end justify-items-center grid grid-cols-2">
				<div>{props.data.points}</div>
				<div>{props.data.wins}</div>
			</div>
		</li>
	)
}

export default ConstructorsListItem;