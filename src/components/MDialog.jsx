import { Dialog } from '@headlessui/react'
import ModalDesc from './ModalDesc.jsx'
import MDImage from './MDImage.jsx'

const MDialog = (props) => {

	const setIsOpen = (open) =>{
		props.update(open);
	}
	const handleFav=()=>{
		props.fav();
	}

	return (
    	<Dialog open={props.open} onClose={() => setIsOpen(false)}>
			<div className="fixed inset-0 bg-gray-500/75" aria-hidden="true" /> 
   			<div className="border-2 border-slate-500 bg-black fixed inset-0 flex w-1/3 h-1/2 mx-auto my-auto items-center justify-center p-4">
				
				<Dialog.Panel className="w-full h-full max-w-lg rounded bg-black text-white">
					<div className='h-full flex flex-col'>
						<div className='w-full justify-self-center'>
   							<Dialog.Title>{props.type + " Details"}</Dialog.Title>
       					</div>

				    	<div className='w-full h-1/2 grid grid-cols-1 border-2 border-blue-800'>
							<Dialog.Description className=" ml-4 text-white">
       							<ModalDesc type={props.type} data={props.data}/>				
							</Dialog.Description>
						</div>
						
						<div className='max-h-full w-full border-2 border-blue-800 grid place-content-center bg-black text-white'>
						
   		    			  <MDImage type={props.type} data={props.data}/>

						</div>

					<div className='flex justify-end gap-8 bg-black'>
       					<button className="mt-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-3 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button" onClick={handleFav}>Favourite this {props.type}</button>
       					<button className="mt-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-3 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button" onClick={() => setIsOpen(false)}>Close</button>
					</div>
					</div>
				</Dialog.Panel>

		  	</div>
    	</Dialog>
  )
}

export default MDialog;