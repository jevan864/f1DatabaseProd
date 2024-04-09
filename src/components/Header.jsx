import SeasonSelect from './SeasonSelect.jsx'



const Header = (props) =>{
	
	const logHandle = (e)=>{
		e.preventDefault();
		props.log(false);
	}
	const aboutHandle =()=>{
		props.about();
	}
	const favHandle =()=>{
		props.favs(true);
	}

	return(
		<div className='min-w-full h-24 bg-color-black text-white'>
		<header className="border-b-2 border-sky-300 bg-color-black text-white">
    	<nav className="grid grid-cols-3 justify-items-evenly p-6 lg:px-8 bg-color-black text-white">	
			<div className="flex-none justify-self-start border-1 border-sky-300">
				<SeasonSelect data={props.data} update={props.update}/>
			</div>
			<div className="flex-none gap-x-12 flex-1">
    		    <h1 className="text-2xl font-bold leading-6 text-gray-400 justify-self-center">F1 Database</h1>
    		</div>
    		<div className="flex-inital w-150 justify-self-end">
				<div className="flex justify-items-end">
				<button className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-sm py-2.5 px-6 bg-gray-400 text-gray-800 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button" onClick={favHandle}>
					Favourites
				</button>
				<button className="mx-4 align-middle select-none font-sans font-bold text-center uppercase transition-all text-sm py-2.5 px-6 bg-gray-400 text-gray-800 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button" onClick={aboutHandle}>
					About
				</button>
				<button className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 bg-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button" onClick={logHandle}>
					Log out <span>&rarr;</span>
				</button>
				</div>
      		</div>
		</nav>
		</header>
		</div>
	)
}

export default Header;