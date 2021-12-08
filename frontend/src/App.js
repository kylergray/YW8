import './App.css';
import {Component} from 'react';
import Restaurant from './Card.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restuarants: [],
      objects: []
    };
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch('http://128.208.1.136:5000/data?lat=47.658101130283974&lng=-122.31845242186691')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({restuarants: data});
          // this.setState({objects: []});
          let objects = [];
          data.forEach(element => {
            const location = <Card props={{data: element}} key={element.place_id}/>;
            objects.push(location);
          });
          this.setState({objects: objects});
          console.log(this.state)
        });
      console.log("loaded")
      console.log(this.state);
	}

  componentDidUpdate() {
    console.log("update")
  }

  render() {
    console.log("render")
    let itemList = [];
    const data = this.state.restuarants;
    for (let i = 0; i < this.state.restuarants.length; i++) {
      itemList.push(<Restaurant props={data[i]} key={i}/>);
    }
    return (
      <div className="App">
        <Card sx={{ maxWidth: 500 }} className="header">     
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  Lizard
              </Typography>
            </CardContent>          
          </Card>
        {itemList}
      </div>
    );
  }
}


export default App;
