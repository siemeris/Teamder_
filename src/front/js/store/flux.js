const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			auth: false,
			message: null,
			activities: [],
			userActivities: [],
			postedActivities: [],
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
			markers: [],
			dates: [],
			datesUser: [],
			index: 0,


		},
		actions: {
			getMarkers: () => {
				let { markers } = getStore()
				const { activities } = getStore()
				// console.log(activities.length, "long activities")

				if (activities.length > markers.length) {
					activities.map((value, index) => {

						let latitude = parseFloat(value.latitude)
						let longitude = parseFloat(value.longitude)
						let categoria = value.category
						let fecha = value.date
						let place = value.location
						let marker = {
							position: {
								lat: latitude,
								lng: longitude
							},
							label: { color: "white", text: " " },
							draggable: true,
							texto: categoria,
							fecha: fecha,
							lugar: place,
						};
						markers.push(marker)
						setStore(markers)
					})
				}
				// console.log(markers, "markers del flux")
			},
			getActivities: async () => {
				await fetch(
					"https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/getAllActivities"
				)
					.then((resp) => {
						if (resp.ok) {
							console.log("El request se hizo bien");
							return resp.json();
						} else {
							console.log("Hubo un Error " + resp.status + " en el request");
						}
					})
					.then((data) => {
						setStore({
							activities: data.result,
						});


					})

					.catch((error) => {
						//error handling
						console.error("ERROR:", error);
					});
			},

			login: (infouserpass) => {
				const response = fetch(

					"https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/token",
					{
						//mode: 'no-cors',
						method: "POST",
						body: JSON.stringify(infouserpass),
						headers: { "Content-Type": "application/json" },
					}

				)
					.then(function (response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						else {
							setStore({ auth: true });
							const { auth } = getStore();
							console.log("auth1", auth)

						}
						return response.json()
						// Aquí es donde pones lo que quieres hacer con la respuesta.
					})
					.then(data => { localStorage.setItem("token", data.token); })
					.catch();
			},

			logout: () => {
				const { auth } = getStore();
				localStorage.removeItem("token")
				setStore({ auth: false })
				console.log("auth3", auth)
			},

			signup: async (infouserpassw) => {

				await fetch("https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/signup", {
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

			addActivity: async (infouserpassw) => {
				let tok = localStorage.getItem("token");


				await fetch("https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/addActivity", {
					method: "POST",
					body: JSON.stringify(infouserpassw),
					headers: {
						"Content-Type": "application/json",

						Authorization: "Bearer " + tok,
					},
				}).then((resp) => {
					if (resp.ok) {
						console.log("registro OK");
						let {index} = getStore()
						index +=1
						setStore(index)
					}
					else {
						console.log(resp.status)
					}
				});
			},

			joinActivity: async (index) => {
				let tok = localStorage.getItem("token");

				await fetch("https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/joinActivity", {
					method: "POST",
					body: JSON.stringify(index),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + tok,
					},
				}).then((resp) => {
					if (resp.ok) {
						console.log("registro OK");
						console.log(index, "index")
						alert("¡Ya estás apuntado!");
					}
					else {
						console.log(index, "index")
						console.log(resp.status)
						alert("Please sign up or login to continue")
					}
				});
			},

			leaveActivity: async (index) => {
				let tok = localStorage.getItem("token");

				await fetch("https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/leaveActivity", {
					method: "DELETE",
					body: JSON.stringify(index),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + tok,
					},
				}).then((resp) => {
					if (resp.ok) {
						console.log("registro OK");
						console.log(index, "index")
						alert("Desapuntado :(");
					}
					else {
						console.log(index, "index")
						console.log(resp.status)
						alert("Algo fue mal")
					}
				});
			},

			deleteActivity: async (index) => {
				let tok = localStorage.getItem("token");

				await fetch("https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/deleteActivity", {
					method: "DELETE",
					body: JSON.stringify(index),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + tok,
					},
				}).then((resp) => {
					if (resp.ok) {
						console.log("registro OK");
						console.log(index, "index")
						alert("Actividad eliminada");
					}
					else {
						console.log(index, "index")
						console.log(resp.status)
						alert("Algo fue mal")
					}
				});
			},

			private: async () => {
				let tok = localStorage.getItem("token");

				//if (tok == getStore().token) {

				await fetch(


					"https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/privated",

					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + tok,
						},
					}
				).then((res) => {
					if (res.status == 200) {
						console.log("Todo bien con el fetch en private");
						const { auth } = getStore();
						console.log("auth4", auth)
						setStore({ auth: true });
					} else {
						console.log(
							"Algo ha ido mal con el token y el require en el private Fetch"
						);
						// return res.json()
					}
				});
				// } else {
				//   return "Validation error flux 97";
				// }

			},

			getActivities: async () => {


				fetch(
					"https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/getAllActivities"
				)
					.then((resp) => {
						if (resp.ok) {
							console.log("El request se hizo bien");
							return resp.json();
						} else {
							console.log("Hubo un Error " + resp.status + " en el request");
						}
					})
					.then((data) => {
						setStore({ activities: data.result })
					})
					.catch((error) => {
						//error handling
						console.error("ERROR:", error);
					});
			},

			getTargetActivities: async () => {
				let tok = localStorage.getItem("token");
				await fetch(
					"https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/getTargetActivities",
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + tok,
						},
					}
				)
					.then((resp) => {
						if (resp.ok) {
							console.log("El request se hizo bien");
							return resp.json();
						} else {
							console.log("Hubo un Error " + resp.status + " en el request");
						}
					})
					.then((data) => {
						setStore({ userActivities: data.Target_Activities })
						let { datesUser } = getStore()
						const { userActivities } = getStore()

						// console.log(postedActivities.length, "long activities")

						userActivities.map((value, index) => {
							let fecha = value.date
							const [day, month, year] = fecha.split("/")
							const newDate = new Date(+year, +month - 1, +day);
							// console.log(date, "date antes del push")
							datesUser.push(newDate)
						})


						setStore(datesUser)
					})


					.catch((error) => {
						//error handling
						console.error("ERROR:", error);
					});
			},

			getPostedActivities: async () => {
				let tok = localStorage.getItem("token");
				await fetch(
					"https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/getPostedActivities",
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + tok,
						},
					}
				)
					.then((resp) => {
						if (resp.ok) {
							console.log("El request se hizo bien");
							return resp.json();
						} else {
							console.log("Hubo un Error " + resp.status + " en el request");
						}
					})
					.then((data) => {
						setStore({ postedActivities: data.Posted_Activities })
						let { dates } = getStore()
						const { postedActivities } = getStore()

						// console.log(postedActivities.length, "long activities")


						postedActivities.map((value, index) => {
							let fecha = value.date
							const [day, month, year] = fecha.split("/")
							const newDate = new Date(+year, +month - 1, +day);
							// console.log(date, "date antes del push")
							dates.push(newDate)
							setStore(dates)
						})


					})
					.catch((error) => {
						//error handling
						console.error("ERROR:", error);
					});
			},







			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
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
			}
		}
	};
};

export default getState;
