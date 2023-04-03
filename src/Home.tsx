import { Button, Card, CardActions, CardContent, CardMedia, Collapse, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { retrieveGeoData } from "./API/RetrieveGeoData";
import { GeoData } from "./Types/Types";

export function Home() {
	const [geoData, setGeoData] = useState<GeoData[]>();

	useEffect(() => {
		async function getData() {
			const file = await retrieveGeoData();
			setGeoData(file)
		}
		getData();
	}, [])

	return (
		<div className="flex gap-3 justify-center w-full flex-wrap">
			{geoData?.map((data => {
				return (
					<div className="card w-100">
						<div className="card-image">
							<img className="responsiv-img activator h-52" src={require(`./images/${data.properties.volcanoID}.jpg`)} />
							<span className="card-title">{data.properties.volcanoTitle}</span>
						</div>
						<div className="card-content">
							<span className="card-title activator grey-text text-darken-4">{data.properties.activity}</span>
						</div>
						<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">{data.properties.volcanoTitle}<i className="material-icons text-lg close right">X</i></span>
							<h5>Current Level: {data.properties.level} </h5>
							<h5>Current hazards: {data.properties.hazards} </h5>
							<h5>Current ACC: {data.properties.acc}</h5>
						</div>
					</div>
				)
			}))}
		</div>
	);
}