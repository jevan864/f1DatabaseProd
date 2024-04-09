import { useState } from 'react'
// import Example from './components/Example.jsx'
import LoginView from './components/LoginView.jsx'
import MainPageWH from './components/MainPageWH.jsx'
import './App.css'

function App() {
	const [Auth, setAuth] = useState(false) // change to false to see login page

	const loginClick = (loggedin)=>{
		setAuth(loggedin);
	}
	if(!Auth)
		return (
			<div className="bg-black text-white fixed inset-0 flex w-screen h-full mx-auto my-auto ">
			<LoginView update={loginClick}/>
			</div>
		)
	else
		return(
			<div className="bg-black text-white fixed inset-0 flex w-screen h-full mx-auto my-auto items-center justify-center p-4">
				<MainPageWH update={loginClick}/>
			</div>
		)
}

export default App
