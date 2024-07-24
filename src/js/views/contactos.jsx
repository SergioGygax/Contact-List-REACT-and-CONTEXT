import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";



const Contactos = () => {

  const [contactos, setContactos] = useState([])

  useEffect(() => {
    fetch("https://playground.4geeks.com/contact/agendas/agendaproyecto/contacts")
      .then(resp => resp.json())
      .then(resp => setContactos(resp.contacts))
      .catch(error => console.log(error))

  }, [])

  const borrar = (e, id) => {



    fetch(`https://playground.4geeks.com/contact/agendas/agendaproyecto/contacts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },

      })
      .then(resp => {
        if (resp.ok) {
          fetch("https://playground.4geeks.com/contact/agendas/agendaproyecto/contacts")
            .then(resp => resp.json())
            .then(resp => setContactos(resp.contacts))
            .catch(error => console.log(error))
        }
      })


  }

  return (
    <div>
      {contactos.map((contacto) =>
        <div class="card">
          <div class="card-body">
            <h1>{contacto.name}</h1>
            <h2>{contacto.phone}</h2>
            <Link to={`/editar/${contacto.id}`}>Ir a Editar</Link>
            <button onClick={(e) => borrar(e, contacto.id)}>Borrar contacto</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contactos
