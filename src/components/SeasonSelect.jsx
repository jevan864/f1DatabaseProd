

const SeasonSelect = (props) =>{
	const handleChange = (e)=>{
		e.value = e.target.value;
		props.update(e.target.value);
	}

	return(
		<div className="flex flex-row">
			<div className="text-slate-200 mr-2">Season: </div>
			<select name="season" onChange={handleChange} className="text-sm rounded-lg block w-full p-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" >
				<option>Select a Season...</option>
				{ props.data.map((c, indx)=><option key={indx}>{c.year}</option>)}
			</select>       
		</div>
	);
}

export default SeasonSelect;