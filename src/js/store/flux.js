const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/agendaproyecto/contacts")
					.then(resp => {
						console.log(resp)
						if (!resp.ok) {
							getActions().createAgenda()
						} else {
							return resp.json()
						}
					})
					.then(resp => setStore({contacts: resp.contacts}))
					.catch(error => console.log(error))
			},
			createAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/agendaproyecto", {method:"POST"})
    			.then(resp => resp.json())
    			.then(data => getActions().getContacts())
			}
		}
	};
};

export default getState;
