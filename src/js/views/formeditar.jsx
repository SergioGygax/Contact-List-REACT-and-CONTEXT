import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";

const FormEditar = () => {

    const [contacto, setContacto] = useState ({
        "name": "",
        "phone": "",
        "email": "",
        "address": "",
    })

    const params = useParams();
      console.log(params.id)
    const nuevoContacto = (e) => {

        e.preventDefault()       
        fetch(`https://playground.4geeks.com/contact/agendas/agendaproyecto/contacts/${params.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    contacto
                )
            }
        )
        setContacto(
            {
                "name": "",
                "phone": "",
                "email": "",
                "address": "",
            }
        )
    }

  return (
    <div>
      <div class="mb-3">
        <h1>Editar Contacto</h1>
        <form onSubmit={nuevoContacto}>
            
        

  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input 
    type="text" 
    class="form-control"
    onChange={(e)=>{setContacto({...contacto, name:e.target.value})}} 
    id="exampleFormControlInput1" 
    placeholder="Name"/>

  <label for="exampleFormControlInput2" class="form-label">Phone</label>
  <input 
    type="text" 
    class="form-control"
    onChange={(e)=>{setContacto({...contacto, phone:e.target.value})}} 
    id="exampleFormControlInput2" 
    placeholder="Phone"/>

  <label for="exampleFormControlInput3" class="form-label">Email</label>
  <input 
    type="email" 
    class="form-control"
    onChange={(e)=>{setContacto({...contacto, email:e.target.value})}}
    id="exampleFormControlInput3" 
    placeholder="email@example.com"/>

  <label for="exampleFormControlInput4" class="form-label">Address</label>
  <input 
    type="text" 
    class="form-control"
    onChange={(e)=>{setContacto({...contacto, address:e.target.value})}}
    id="exampleFormControlInput4" 
    placeholder="Address"/>
    

    <button type="submit" className="btn btn-primary">ENVIAR</button>
    </form>
</div>
    </div>
  )
}

export default FormEditar
