import { useEffect, useState } from 'react';
import RaceListItem from './RaceListItem.jsx'



const RaceList = (props) =>{
	const [list, setList] = useState([props.data])

	useEffect( () => {
		setList(props.data);
	}, [props.data] );
	const reverseList=()=>{
		const newList = [...list];
		setList(newList.reverse());
	}
	return(
		<div className='w-full justify-items-stretch content-start grid grid-cols-1 border-2 border-blue-800'>
			<div className='w-full h-12'>
				<div className='font-bold text-lg justify-self-center'>{"Races in the " + props.season + " Season"}</div>
			</div>
			<div className='flex justify-items-stretch grid grid-cols-1'>
			<ul className='w-full'>
				<li className="border-2 border-sky-300 grid grid-cols-2">
					<div className="flex justify-items-start justify-self-start gap-4">
						<div className="border-x-2 border-sky-300">
						<button className="text-center align-middle transition-all rounded-lg select-none hover:bg-slate-400/40 active:bg-slate-400/20" type="button" onClick={reverseList}>
							{"Rnd."}
						</button>
						</div>
						<div>Circuit</div>
					</div>
					<div className="grid justify-self-end align-middle grid-cols-2">
					</div>
				</li>
				{ list.map( (r,indx) => <RaceListItem race={r} key={indx} update={props.update}/>) }
			</ul>
			</div>
		</div>
	)
}

export default RaceList;