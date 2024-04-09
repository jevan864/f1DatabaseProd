import LoginBox from './LoginBox.jsx';




const LoginView = (props) =>{
	
	return(
		<div className="container min-w-full bg-cover bg-[url('https://i.kym-cdn.com/entries/icons/facebook/000/046/704/Screenshot_2023-09-29_at_12.15.04_PM.jpg')]">
				<div className="mx-auto max-w-sm py-32 sm:py-48 lg:py-56">	
					<LoginBox update={props.update}/>
				</div>
		</div>
	)
}

export default LoginView;




