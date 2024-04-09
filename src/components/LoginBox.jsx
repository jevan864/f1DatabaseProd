const LoginBox = (props) =>{

	const logHandle = (e)=>{
		e.preventDefault();
		props.update(true);
	}

	return(
		<form className="container" onSubmit={logHandle}>
			<div className="col-span-3">
				<input type="text" name="username" id="username" placeholder="Username" className="h-10 border mt-1 rounded px-4 w-full text-gray-600 bg-gray-50"  />
			</div>

			<div className="col-span-3">
				<input type="text" name="password" id="password" placeholder="Password" className="h-10 border mt-1 rounded px-4 w-full text-gray-600 bg-gray-50"  />
			</div>
			<div className="col-start-1">
				<button className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 bg-gray-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="submit">
					log in

  				</button>
			</div>
		</form>
	);

}

export default LoginBox;
