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
			activities: [],
			markers: [],
			dates: [],
			urlIcons:[],
			location: "",

		},
		actions: {
			getWeather: ()=> {
				let { location } = getStore()
				console.log(location, "location")
				const url = `https://api.openweathermap.org/data/2.5/weather?q=` + location + `&lang=en&units=metric&appid=74b3467d2c3033271c21502ee8e7ca5e`
				  fetch(url)
				  .then((resp) => {
					if (resp.ok) {
					  console.log("El request se hizo bien");
					  return resp.json();
					} else {
					  console.log("Hubo un Error " + resp.status + " en el request");
					}
				  })
				  .then((data) => {
					//here is were your code should start after the fetch finishes
					console.log("Este es el body del request", data); //this will print on the console the exact object received from the server
					// console.log(body.map((t) => t.label));
					// setLista(body.map((t) => t.label));
					console.log(data.main.temp)
					setTemp(Math.round(data.main.temp))
			
					// icono de la API estático
					let iconCode = data.weather[0].icon
					const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
					let { urlIcons } = getStore()
					urlIcons.push(urlIcon)
					

					// icono dinámico
					console.log(data.weather[0].main)
					switch (data.weather[0].main) {
					  case 'Thunderstorm':
						setOpt({
						  animationData: thunder,
						})
						console.log('TORMENTA');
						break;
					  case 'Drizzle':
						setOpt({
						  animationData: drizzle,
						})
						console.log('LLOVIZNA');
						break;
					  case 'Rain':
						setOpt({
						  animationData: rain,
						})
						console.log('LLUVIA');
						break;
					  case 'Snow':
						setOpt({
						  animationData: snow,
						})
						console.log('NIEVE');
						break;
					  case 'Clear':
						// ASÍ SOLO FUNCIONA CON ALGUNOS SVG
						// var iconoAnimado = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path fill="none" stroke="#f59e0b" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21" /><animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate" /></g></svg>
						// setIconoanimado(iconoAnimado)
						console.log('LIMPIO');
						console.log(defaultOptions.animationData)
						setOpt({
						  animationData: clear,
						})
						break;
					  case 'Atmosphere':
						setOpt({
						  animationData: atmosphere,
						})
					   
						console.log('ATMOSFERA');
						break;
					  case 'Clouds':
						setOpt({
						  animationData: cloudy,
						})
						console.log('NUBES');
						break;
					  default:         
						setOpt({
						  animationData: notavailable,
						})
						console.log('por defecto');
					}
			
				  })
				  .catch((error) => {
					//error handling
					console.error("ERROR:", error);
				  });
			},
			getMarkers: () => {
				let { markers } = getStore()
				const { activities } = getStore()
				console.log(activities.length, "long activities")

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
				console.log(markers, "markers del flux")
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
                        console.log("El request se hizo bien" );
                        return resp.json();
                      } else {
                        console.log("Hubo un Error " + resp.status + " en el request");
                      }
                    })
                    .then((data) => {
						setStore({activities: data.result})
                    })
                    .catch((error) => {
                      //error handling
                      console.error("ERROR:", error);
                    });
			},

			getTargetActivities: async () => {
				let tok = localStorage.getItem("token");
				fetch(
                    "https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/getTargetActivities"
                  )
                    .then((resp) => {
                      if (resp.ok) {
                        console.log("El request se hizo bien" );
                        return resp.json();
                      } else {
                        console.log("Hubo un Error " + resp.status + " en el request");
                      }
                    })
                    .then((data) => {
						setStore({userActivities: data.result})
                    })
                    .catch((error) => {
                      //error handling
                      console.error("ERROR:", error);
                    });
			},

			getPostedActivities: async () => {
				let tok = localStorage.getItem("token");
				fetch(
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
                        console.log("El request se hizo bien" );
                        return resp.json();
                      } else {
                        console.log("Hubo un Error " + resp.status + " en el request");
                      }
                    })
                    .then((data) => {
						setStore({postedActivities: data.Posted_Activities})
						let { dates } = getStore()
						const { postedActivities } = getStore()

						console.log(postedActivities.length, "long activities")

						if (postedActivities.length > dates.length) {
							postedActivities.map((value, index) => {
								let fecha = value.date
								dates.push(fecha)
								setStore(dates)
							})
						}
						console.log(dates, "dates del flux")
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
