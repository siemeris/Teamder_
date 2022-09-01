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
			iconCode:"",
			urlIcon:"",
			iconsList: [],
			locationList: [],
			dateList:[],
			tempList: [],
			weather:[],

		},
		actions: {
			// getWeather: () => {
			// 	let { locationList } = getStore()
			// 	console.log(locationList, "location get weather")
			// 	locationList.map((value,index)=>{
			// 		const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + "&lang=en&units=metric&appid=74b3467d2c3033271c21502ee8e7ca5e"
			// 	console.log(url, "url")
			// 		fetch(url)
			// 		.then((resp) => {
			// 			if (resp.ok) {
			// 				console.log("El request se hizo bien");
			// 				return resp.json();
			// 			} else {
			// 				console.log("Hubo un Error " + resp.status + " en el request");
			// 			}
			// 		})
			// 		.then((data) => {
			// 			//here is were your code should start after the fetch finishes
			// 			console.log("Este es el body del request", data); //this will print on the console the exact object received from the server
			// 			// console.log(body.map((t) => t.label));
			// 			// setLista(body.map((t) => t.label));
			// 			console.log(data.main.temp)
			// 			// setTemp(Math.round(data.main.temp))
			// 			let { tempList } = getStore()
			// 			tempList.push(Math.round(data.main.temp))
			// 			setStore(tempList)

			// 			// icono de la API estático
			// 			// let iconCode = data.weather[0].icon
			// 			// const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
			// 			// let { urlIconsList } = getStore()
			// 			// urlIconsList.push(urlIcon)

			// 		})
			// 		.catch((error) => {
			// 			//error handling
			// 			console.error("ERROR:", error);
			// 		});
			// 	})

			// },
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

						let { locationList } = getStore()
						let { dateList } = getStore()

						let { activities } = getStore()
						activities.map((value, index) => {
							console.log(value.city, "city del map")
							let location = value.city
							let date = value.date
							locationList.push(location)
							dateList.push(date)
							setStore(locationList)
							setStore(dateList)
						})


						console.log(locationList, "location get weather")
						locationList.map((value, index) => {
							// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + "&lang=en&units=metric&appid=74b3467d2c3033271c21502ee8e7ca5e"
							const url = "https://api.openweathermap.org/data/2.5/forecast?appid=74b3467d2c3033271c21502ee8e7ca5e&q=" + value + "&units=metric"
							console.log(url, "url")
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
									setStore({weather: data})
									const {weather} = getStore()
									console.log(weather, "weather")

									let{tempList} =getStore()
									tempList.push(Math.round(data.list[0].main.temp))

									let{dateList} = getStore()
									console.log(dateList, "dateList")
									
									//CON LA URL DE WEATHER, NO DE FORECAST
									// let { tempList } = getStore()
									// tempList.push(Math.round(data.main.temp))
									// setStore(tempList)

									// let {iconCode} = getStore()
									// let {iconsList} = getStore()
									// let {urlIcon} = getStore()

									// // icono de la API estático
									// iconCode = data.weather[0].icon
									// urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
									// iconsList.push(urlIcon)
									// setStore(iconsList)

								})
								.catch((error) => {
									//error handling
									console.error("ERROR:", error);
								});
						})





						// location.push(data.result.city)
						// console.log(locationList, "array de locations flux")
						// const { activities } = getStore()
						// const { location } = getStore()
						// activities.map((value)=>{
						// 	location = value.city
						// 	console.log(value.city, "value.city")
						// 	getWeather(location,value.date)
						// })

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

			// getActivities: async () => {


			// 	fetch(
			// 		"https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/getAllActivities"
			// 	)
			// 		.then((resp) => {
			// 			if (resp.ok) {
			// 				console.log("El request se hizo bien");
			// 				return resp.json();
			// 			} else {
			// 				console.log("Hubo un Error " + resp.status + " en el request");
			// 			}
			// 		})
			// 		.then((data) => {
			// 			setStore({ activities: data.result })
			// 		})
			// 		.catch((error) => {
			// 			//error handling
			// 			console.error("ERROR:", error);
			// 		});
			// },

			getTargetActivities: async () => {
				let tok = localStorage.getItem("token");
				fetch(
					"https://3001-miguelubeda-teamder-ygfdc0g635s.ws-eu63.gitpod.io/api/getTargetActivities"
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
						setStore({ userActivities: data.result })
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

						if (postedActivities.length > dates.length) {
							postedActivities.map((value, index) => {
								let fecha = value.date
								dates.push(fecha)
								setStore(dates)
							})
						}
						// console.log(dates, "dates del flux")
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
