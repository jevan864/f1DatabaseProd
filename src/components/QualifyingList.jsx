import { useEffect, useState } from 'react';
import QualifyingListItem from './QualifyingListItem.jsx'



const QualifyingList = (props) =>{
	const [list, setList] = useState([{positionText:"", laps:"", points:"", constructors:{name:""}, drivers:{forename:"", surname:""}}]);

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
				<li className="border-2 border-sky-300 flex items-center">
					<div className="flex justify-items-start grid grid-cols-5 w-8">
						<button className="text-center align-middle transition-all rounded-lg select-none hover:bg-slate-400/40 active:bg-slate-400/20" type="button" onClick={reverseList}>
							{"Pos."}
						</button>							
					</div>
					<div className="flex grid grid-cols-6 w-full">
							<div className="justify-self-start justify-items-start col-span-2 ml-2">{"Driver Name"}</div>
							<div className='justify-self-start justify-items-start'>{"Constructor"}</div>
					
						<div>{"Q1."}</div>
						<div>{"Q2"}</div>
						<div>{"Q3"}</div>
					</div>
				</li>
				{ list.map( (d,indx) => <QualifyingListItem data={d} key={indx} modal={props.modal}/>) }
			</ul>
		</div>
	)
}

export default QualifyingList;