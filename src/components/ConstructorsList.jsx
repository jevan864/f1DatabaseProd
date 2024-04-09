import { useEffect, useState } from 'react';
import ConstructorsListItem from './ConstructorsListItem.jsx'



const ConstructorsList = (props) =>{
	const [list, setList] = useState([]);

	useEffect( () => {
		setList(props.data);
	}, [props.data] );
	const reverseList=()=>{
		const newList = [...list];
		setList(newList.reverse());
	}

	return(
		<div className='w-full flex content-start text-sm'>
			<ul className='w-full'>
				<li className="border-2 border-sky-300 grid grid-cols-2">
					<div className="flex justify-items-start">
						<div className="border-x-2 border-sky-300 justify-items-start w-8">
						<button className="text-center align-middle transition-all rounded-lg select-none hover:bg-slate-400/40 active:bg-slate-400/20" type="button" onClick={reverseList}>
							{"Pos."}
						</button>
						</div>
						<div>{"Constructor Name"}</div>
					</div>
					<div className="w-full justify-self-end justify-items-center grid grid-cols-2">
						<div>{"Pts."}</div>
						<div>{"Wins"}</div>
					</div>
				</li>
				{ list.map( (d,indx) => <ConstructorsListItem data={d} key={indx} modal={props.modal}/>) }
			</ul>
		</div>
	)
}

export default ConstructorsList;