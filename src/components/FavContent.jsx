import FavListItem from "./FavListItem";


const FavContent = (props) =>{
	return(
		<div className='container w-full h-full mx-2 grid grid-cols-3 items-start text-sm gap-2'>
			<div className='flex flex-col'>
				Favourite Drivers 
				<div className='border border-slate-600 min-h-36 text-xs text-white'>
					<ul>
						{props.drivers.map((d, indx)=><FavListItem key={indx} data={d.forename + " " + d.surname} />)}
					</ul>
				</div>
			</div>
			<div className='flex flex-col'>
				Favourite Constructors 
				<div className='border border-slate-600 min-h-36 text-xs text-white'>
					<ul>
						{props.cons.map((c, indx)=><FavListItem key={indx} data={c.name} />)}
					</ul>
				</div>
			</div>
			<div className='flex flex-col'>
				Favourite Circuits 
				<div className='w-full border border-slate-600 min-h-36 text-xs text-white'>
					<ul className="w-full h-full">
						{/* <li>{props.circ[0].name}</li> */}
						{ props.circ.map( (c,indx) => <FavListItem data={c.name} key={indx}/>) }
					</ul>
				</div>
			</div>
		</div>
	)

}



export default FavContent;