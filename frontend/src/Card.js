import {React, Component} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IoHourglassSharp } from "react-icons/io5";
import { ImClock2 } from "react-icons/im";
import { CgMathEqual } from "react-icons/cg";
import { MdDirectionsWalk } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import './Card.css';

class Restaurant extends Component {

	constructor(props) {
		super(props);
		const mapsLink = "https://www.google.com/maps/place/?q=place_id:" + this.props.props.place_id;
		this.state = {
			url: mapsLink
		}
	}

	loadMaps = () => {
		window.open(this.state.url, '_blank');
	}


	render() {
    console.log(this.props)
		return (
			<div className="card">
				<Card sx={{ maxWidth: 500, minWidth: 500 }}>
					<CardActionArea onClick={this.loadMaps}>
						{/* <CardMedia
						component="img"
						height="140"
						image={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+ this.props.props.photos.photo_reference + "&key=AddYourOwnKeyHere"}
						alt="green iguana"
						/> */}
						<CardContent >
						<Typography gutterBottom variant="h5" component="div">
							{this.props.props.name}
						</Typography>
						<Typography variant="h6" color="text.secondary" className="cardcontent">
              				<IoHourglassSharp className="icon"/> {Math.round(parseInt(this.props.props.wait_time) / 2)} min <AiOutlinePlus className="plus"/> 
							  <MdDirectionsWalk className="icon"/> {Math.round(this.props.props.walk_time)} min
							<CgMathEqual className="icon"/> <ImClock2 className="clock" /> {Math.round(parseInt(this.props.props.wait_time) / 2) + Math.round(this.props.props.walk_time)} min
						</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		);
	}
}


export default Restaurant;