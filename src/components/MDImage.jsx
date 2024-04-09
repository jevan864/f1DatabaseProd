import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const MDImage = (props) =>{

	const type = props.type.toLowerCase();
	if(type=="driver"){
		return(
		<>
			Image
		</>
		)
	}
	else if(type=="constructor"){
		return(
			<>
				Image
			</>
		)	
	}
	else{ //circuit
		const [position, setPosition] = useState([0,0]);
		useEffect( () => {
			setPosition([props.data[0].lat,props.data[0].lng]);
		}, [props.data] );
		console.log(props.data[0].lat);
		console.log(props.data[0].lng);
		if(props.data[0].lat == undefined || props.data[0].lng == undefined ){
			return(
				<>
					Image
				</>
			)
		}else{
		return(
			<div className='h-40'>
			<MapContainer center={[props.data[0].lat, props.data[0].lng]} zoom={13} scrollWheelZoom={false} style={{height : '160px', width: '507px'}}>
			  <TileLayer
			    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			  />
			  <Marker position={[props.data[0].lat, props.data[0].lng]}>
			    <Popup>
			      A pretty CSS3 popup. <br /> Easily customizable.
			    </Popup>
			  </Marker>
			</MapContainer>
			</div>
		)
	}
	}

}



export default MDImage;