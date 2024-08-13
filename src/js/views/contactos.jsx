import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from "react-router-dom";
import { Context } from '../store/appContext';


const Contactos = () => {
  const{store, actions} = useContext(Context)
  const [contactos, setContactos] = useState([])


  useEffect(() => {
    actions.getContacts()
  }, [])

  const borrar = (e, id) => {



    fetch(`https://playground.4geeks.com/contact/agendas/agendaproyecto/store.contacts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },

      })
      .then(resp => {
        if (resp.ok) {
          fetch("https://playground.4geeks.com/contact/agendas/agendaproyecto/store.contacts")
            .then(resp => resp.json())
            .then(resp => setContactos(resp.store.contacts))
            .catch(error => console.log(error))
        }
      })


  }

  return (
    <div>
      {store.contacts && store.contacts.length > 0 && store.contacts.map((contacto) =>
        <div className="card" key={contacto.id}>
          <div className="card-body">
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
