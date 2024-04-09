


const ModalDesc = (props) =>{

	const type = props.type.toLowerCase();
	if(type=="driver"){
		return(
//name, dob, age, nationality, url
		<>
			{props.data[0].forename} {props.data[0].surname} 
			<br></br>{"Born: " + props.data[0].dob} 
			<br></br>{"Nationality: " + props.data[0].nationality} 
			<br></br><a href={props.data[0].url} className="text-blue-500 decoration-blue-600 text-decoration no-underline hover:underline">{props.type + " Wiki Page"}</a>
		</>
		)
	}
	else if(type=="constructor"){
		return(
//name, nationality, url
			<>
				{props.data[0].name} 
				<br></br>{"Nationality: " + props.data[0].nationality}
				<br></br><a href={props.data[0].url} className="text-blue-500 decoration-blue-600 text-decoration no-underline hover:underline">{props.type + " Wiki Page"}</a>
			</>
		)	
	}
	else{ //circuit
		return(
//name,location, country, url
			<>
				{props.data[0].name} 
				<br></br>{"Location: " + props.data[0].location} 
				<br></br>{"Country: " + props.data[0].country} 
				<br></br><a href={props.data[0].url} className="text-blue-500 decoration-blue-600 text-decoration no-underline hover:underline">{props.type + " Wiki Page"}</a>
			</>
		)
	}

}



export default ModalDesc;