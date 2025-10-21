import { useState } from "react"

export default function FormCheckOut (props) {
    const [formData, setFormData]= useState ({
        userName: "",
    mail: "",
    phone: ""

    })
    console.log (formData);
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
        <form onSubmit={handleSubmit} >
            <label > Nombre
                <input onChange={handleInputChange} name= "userName" required type= "text" value={formData.userName}  placeholder= "Laura Gonzalez"/>
            </label>
            <label> Email
                <input onChange={handleInputChange} name= "mail" required type= "text" value={formData.mail}  placeholder= "@"/>
            </label>
            <label> Telefono
                <input onChange={handleInputChange} name= "phone" required type= "text" value={formData.phone}  placeholder= "0303456"/>
            </label>
            <button>Confirmar</button>
            <button onClick={() => setFormData( {userName: "",mail: "",phone: ""})} type="button">Reset</button>
        </form>
    )
}