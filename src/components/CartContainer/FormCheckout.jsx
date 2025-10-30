import { useState } from "react"

export default function FormCheckOut (props) {
    const [formData, setFormData]= useState ({
        userName: "",
    mail: "",
    phone: ""

    })
   
    function handleSubmit (event) {

        event.preventDefault();
        props.handleCheckOut(formData);
    
    }

function handleInputChange (event) {
    const value= event.target.value;
    const name= event.target.name;
    const newFormData= {...formData};
    newFormData [name]= value;
    setFormData (newFormData);
}
    return (
        <div className="bg-gray-100 p-4 rounded-lg mt-4 mb-4 ">
            <h2 className="font-primary font-bold italic mb-4 text-lg">Datos Personales</h2>
             <form className="flex flex-col  gap-3 mr-3" onSubmit={handleSubmit} >
            <label className="flex gap-2" > Nombre
                <input className="bg-gray-50 pl-2 rounded-xl min-w-3" onChange={handleInputChange} name= "userName" required type= "text" value={formData.userName}  placeholder= "Laura Gonzalez"/>
            </label>
            <label className="flex gap-2"> Email
                <input className="bg-gray-50 pl-2 rounded-xl min-w-3" onChange={handleInputChange} name= "mail" required type= "text" value={formData.mail}  placeholder= "tumail@mail.com"/>
            </label>
            <label className="flex gap-2"> Telefono
                <input className="bg-gray-50 pl-2 rounded-xl min-w-3" onChange={handleInputChange} name= "phone" required type= "text" value={formData.phone}  placeholder= "0303456"/>
            </label>
            <div className="flex gap-4">
                <button className="bg-gray-500 rounded-3xl text-amber-50  py-2 font-semibold text-center transition duration-150 hover:bg-chill-blue-hover pr-4 pl-4 inline-block self-start" onClick={() => setFormData( {userName: "",mail: "",phone: ""})} type="button">Reset</button>
            <button className="bg-chill-blue rounded-3xl text-amber-50  py-2 font-semibold text-center transition duration-150 hover:bg-chill-blue-hover pr-4 pl-4 inline-block self-start" >Comprar</button>
            </div>
            
        </form>
        </div>
       
    )
}