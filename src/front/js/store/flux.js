const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
            auth: false,
			message: null,
			// demo: [
			// 	// {
			// 	// 	title: "FIRST",
			// 	// 	background: "white",
			// 	// 	initial: "white"
			// 	// },
			// 	// {
			// 	// 	title: "SECOND",
			// 	// 	background: "white",
			// 	// 	initial: "white"
			// 	// }
			// ]
		},
		actions: {
			login: (infouserpass) => {
				const response = fetch(
				  "/token",
				  {
					//mode: 'no-cors',
					method: "POST",
					body: JSON.stringify(infouserpass),
					headers: { "Content-Type": "application/json" },
				  }
				)
				.then(function(response) {
				  if (!response.ok) {
				  throw Error(response.statusText);
				  }
				  else{
					setStore({ auth: true });
					const { auth } = getStore();
						console.log("auth1", auth)
					
				  }
				  return response.json()
				  // Aquí es donde pones lo que quieres hacer con la respuesta.
			  })
			  .then(data =>{localStorage.setItem("token", data.token); })
			  .catch();
			  },

			  signup: async (infouserpassw) => {
                await fetch("/signup", {
                    method: "POST",
                    body: JSON.stringify(infouserpassw),
                    headers: {
                        "Content-Type": "application/json"
                    },
                }).then((resp) => {
                    if (resp.ok) {
                        console.log("registro OK");
                    }
                });
            },
		









			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			// getMessage: async () => {
			// 	try{
			// 		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
			// 		const data = await resp.json()
			// 		setStore({ message: data.message })
			// 		// don't forget to return something, that is how the async resolves
			// 		return data;
			// 	}catch(error){
			// 		console.log("Error loading message from backend", error)
			// 	}
			// },


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
			}
		}
	};
};

export default getState;
