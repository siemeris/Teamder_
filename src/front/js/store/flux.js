import { set } from "date-fns";

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
			users: [],
			currentUser: [],
			currentActivity: [],
			iconCode: "",
			urlIcon: "",
			iconsList: [],
			// locationList: [],
			dateWeather: "",
			tempList: [],
			weather: [],
			temperatura: "",
			activador: false,

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
			getWeather: async () => {

				await fetch(
					"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/getAllActivities"
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

						let { activities } = getStore()
						activities.map((value, index) => {
							// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + "&lang=en&units=metric&appid=74b3467d2c3033271c21502ee8e7ca5e"
							const url = "https://api.openweathermap.org/data/2.5/forecast?appid=74b3467d2c3033271c21502ee8e7ca5e&q=" + value.city + "&units=metric"
							// console.log(url, "url")
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
									// console.log("Este es el body del request", data); //this will print on the console the exact object received from the server
									// console.log(body.map((t) => t.label));
									// setLista(body.map((t) => t.label));
									setStore({ weather: data })
									const { weather } = getStore()
									// console.log(weather, "weather getweather")

									// //TEMPERATURA
									let { tempList } = getStore()
									// tempList.push(Math.round(weather.list[0].main.temp))
									// setStore(tempList)
									// console.log(tempList, "tempList del flux")
									// //ICONOS
									let {iconCode} = getStore()
									let {iconsList} = getStore()
									let {urlIcon} = getStore()
									// iconCode = weather.list[0].weather[0].icon
									// urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
									// iconsList.push(urlIcon)
									// setStore(iconsList)

									let { temperatura } = getStore()
									let { dateWeather } = getStore()
									dateWeather = value.date

									//modificando el date para que tenga formato de api 2022-12-01
									let [day, month, year] = dateWeather.split('/')
									dateWeather = year + "-" + month + "-" + day

									setStore(dateWeather)
									// console.log(weather, "Weather weather")

									// console.log(weather.list[0].dt_txt, "fecha api weather")
									// console.log(weather.list.length, "longitud de la lista weather")
									// console.log(dateWeather, "fecha del datelist")


									for (let i = weather.list.length-1; i >0; i--) {
										if (weather.list[i].dt_txt.includes(dateWeather)) {
											// console.log("funciona")
											iconCode = weather.list[i].weather[0].icon
											if (iconCode[2]=="n"){
												iconCode = iconCode.replace("n","d");
												console.log(iconCode, "iconCode2")
											}
											urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
											
											setStore(urlIcon)
											temperatura = Math.round(weather.list[i].main.temp) + "ºC"
											setStore(temperatura)
											
											break
										}
										if (!weather.list[i].dt_txt.includes(dateWeather)){
											// console.log("no está la fecha")
											temperatura = ""
											// setStore(tempList)
											//urlIcon = `http://openweathermap.org/img/wn/02d.png`
											urlIcon = `http://openweathermap.org/img/wn/50d.png`
										}
										
									}
									tempList.push(temperatura)
									setStore(tempList)
									// console.log(tempList, "tempList dentro del for")

									iconsList.push(urlIcon)
									setStore(iconsList)


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





					})

					.catch((error) => {
						//error handling
						console.error("ERROR:", error);
					});
			},

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
					"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/getAllActivities"
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

						// let { locationList } = getStore()
						// let { dateList } = getStore()

						// let { activities } = getStore()
						// activities.map((value, index) => {
						// 	let location = value.city
						// 	let date = value.date
						// 	locationList.push(location)
						// 	dateList.push(date)
						// 	setStore(locationList)
						// 	setStore(dateList)
						// })




					})

					.catch((error) => {
						//error handling
						console.error("ERROR:", error);
					});
			},
			getUsers: async () => {
				await fetch(
					"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/getAllUsers"
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
							users: data.result,
						});


					})

					.catch((error) => {
						//error handling
						console.error("ERROR:", error);
					});
			},

			getCurrentUser: async () => {
				let tok = localStorage.getItem("token");
				await fetch(
					"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/getCurrentUser",
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",

							Authorization: "Bearer " + tok,
						},
					})
					.then((resp) => {
						if (resp.ok) {
							console.log("El request se hizo bien");
							return resp.json();
						} else {
							console.log("Hubo un Error " + resp.status + " en el request");
						}
					})
					.then((data) => {
						console.log(data);
						setStore({
							currentUser: data
						});
					})

					.catch((error) => {
						//error handling
						console.error("ERROR:", error);
					});
			},

			// getCurrentActivity: async () => {
			// 	let tok = localStorage.getItem("token");
			// 	await fetch(
			// 		"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io//api/getCurrentActivity",
			// 		{
			// 			method: "GET",
			// 			headers: {
			// 				"Content-Type": "application/json",

			// 				Authorization: "Bearer " + tok,
			// 			},
			// 		})
			// 		.then((resp) => {
			// 			if (resp.ok) {
			// 				console.log("Current Activity OK");
			// 				return resp.json();
			// 			} else {
			// 				console.log("Hubo un Error " + resp.status + " en el request");
			// 			}
			// 		})
			// 		.then((data) => {
			// 			console.log(data);
			// 			setStore({
			// 				currentActivity: data
			// 			});
			// 		})

			// 		.catch((error) => {
			// 			//error handling
			// 			console.error("ERROR:", error);
			// 		});
			// },

			editUser: async (infoUser) => {
				let tok = localStorage.getItem("token");

				await fetch("https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/editUser", {
					method: "PUT",
					body: JSON.stringify(infoUser),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + tok,
					},
				}).then((resp) => {
					if (resp.ok) {
						console.log("registro OK");
					}
				});
			},


			login: (infouserpass) => {
				const response = fetch(

					"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/token",
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

				await fetch("https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/signup", {
					method: "POST",
					body: JSON.stringify(infouserpassw),
					headers: {
						"Content-Type": "application/json"
					},
				}).then((resp) => {
					if (resp.ok) {
						console.log("registro OK");
					}
					else {
						alert ("Something went wrong with the sign up,please try again");
						console.log("SignUp wrong")
					}
				});
			},

			addActivity: async (infouserpassw) => {
				let tok = localStorage.getItem("token");


				await fetch("https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/addActivity", {
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

			editActivity: async (infoactivity) => {
				let tok = localStorage.getItem("token");

				await fetch("https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/editActivity", {
					method: "PUT",
					body: JSON.stringify(infoactivity),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + tok,
					},
				}).then((resp) => {
					if (resp.ok) {
						console.log("EDIT ACTIVITY OKKKKK");
					}
					else {
						console.log(resp.status, "EDIT ACTIVITY WRONG")
					}
				});
			},

			joinActivity: async (index) => {
				let tok = localStorage.getItem("token");

				await fetch("https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/joinActivity", {
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

				await fetch("https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/leaveActivity", {
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

				await fetch("https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/deleteActivity", {
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


					"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/privated",

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
					"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/getAllActivities"
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

			// getActivities: async () => {


			// 	fetch(
			// 		"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io//api/getAllActivities"
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
				await fetch(
					"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/getTargetActivities",
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
					"https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/getPostedActivities",
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

			getCurrentActivity: async (index) => {
				let tok = localStorage.getItem("token");
				// let { index } = getStore()
				await fetch(
					`https://3001-miguelubeda-teamder-nw271bd699k.ws-eu64.gitpod.io/api/getCurrentActivity/${index}`
					,
					{
						method: "GET",
						// body: JSON.stringify(index),
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + tok,
						},
					}
				)
					.then((resp) => {
						if (resp.ok) {
							console.log("El request se hizo bien GetCurrentActivity");
							return resp.json();
						} else {
							console.log("Hubo un Error " + resp.status + " en el request 5555");
						}
					})
					.then((data) => {
						setStore({currentActivity: data})

						// let { dates } = getStore()
						// const { postedActivities } = getStore()

						// console.log(postedActivities.length, "long activities")


						// postedActivities.map((value, index) => {
						// 	let fecha = value.date
						// 	const [day, month, year] = fecha.split("/")
						// 	const newDate = new Date(+year, +month - 1, +day);
						// 	// console.log(date, "date antes del push")
						// 	dates.push(newDate)
						// 	setStore(dates)
						// })

					})
					.catch((error) => {
						//error handling
						console.error("ERROR:", error);
					});
			},


            // getTargetActivities: async () => {
            //     let tok = localStorage.getItem("token");
            //     fetch(
            //             "https://3001-miguelubeda-teamder-7t7wawy98j3.ws-eu63.gitpod.io/api/getTargetActivities"
            //         )
            //         .then((resp) => {
            //             if (resp.ok) {
            //                 console.log("El request se hizo bien");
            //                 return resp.json();
            //             } else {
            //                 console.log("Hubo un Error " + resp.status + " en el request");
            //             }
            //         })
            //         .then((data) => {
            //             setStore({
            //                 userActivities: data.result,
            //             });
            //         })
            //         .catch((error) => {
            //             //error handling
            //             console.error("ERROR:", error);
            //         });
            // },

            // getPostedActivities: async () => {
            //     let tok = localStorage.getItem("token");
            //     fetch(
            //             "https://3001-miguelubeda-teamder-7t7wawy98j3.ws-eu63.gitpod.io/api/getPostedActivities", {
            //                 method: "GET",
            //                 headers: {
            //                     "Content-Type": "application/json",
            //                     Authorization: "Bearer " + tok,
            //                 },
            //             }
            //         )
            //         .then((resp) => {
            //             if (resp.ok) {
            //                 console.log("El request se hizo bien");
            //                 return resp.json();
            //             } else {
            //                 console.log("Hubo un Error " + resp.status + " en el request");
            //             }
            //         })
            //         .then((data) => {
            //             setStore({
            //                 postedActivities: data.Posted_Activities,
            //             });
            //             let {
            //                 dates
            //             } = getStore();
            //             const {
            //                 postedActivities
            //             } = getStore();

            //             console.log(postedActivities.length, "long activities");

            //             if (postedActivities.length > dates.length) {
            //                 postedActivities.map((value, index) => {
            //                     let fecha = value.date;
            //                     dates.push(fecha);
            //                     setStore(dates);
            //                 });
            //             }
            //             console.log(dates, "dates del flux");
            //         })
            //         .catch((error) => {
            //             //error handling
            //             console.error("ERROR:", error);
            //         });
            // },

            // // Use getActions to call a function within a fuction
            // // exampleFunction: () => {
            // // 	getActions().changeColor(0, "green");
            // // },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
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
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;