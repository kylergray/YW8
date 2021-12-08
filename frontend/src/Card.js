import {React, Component} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
						<CardMedia
						component="img"
						height="140"
						image="https://media.cntraveler.com/photos/5af219d49094c70140318c37/16:9/w_2990,h_1682,c_limit/Lark_Zack-Bent_2018_Lark_Interior2.jpg"
						alt="green iguana"
						/>
						<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{this.props.props.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
              Wait time = {this.props.props.wait_time} min, walk time = {Math.round(this.props.props.walk_time)} min
						</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		);
	}
}


export default Restaurant;