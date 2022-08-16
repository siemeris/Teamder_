import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Jumbotron02 from "/workspace/Teamder/src/front/img/Jumbotron02.png"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-1">
			<p>
				<img src={Jumbotron02} className="w-75 h-25"/>
			</p>
		</div>
	);
};
