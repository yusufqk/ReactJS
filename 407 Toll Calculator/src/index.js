import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import TextFields from './Fields';
import { Grid, Paper, Typography } from '@material-ui/core';


const style = {
    root: {

        flexGrow: 1

    },
    paper: {
        padding: 30,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 500,
        overflowY: 'auto'
    }
};

class Hello extends React.Component {



		state = {
            file_url: '',
            highway:{},
            cost: '',
            charge: ''


        };




	 handleEditChange = name => event => {
        this.setState({
            highway: {
                ...this.state.highway,
                [name]: event.target.value
            }

        })


    };

	 onSubmission = () => {

            return axios.get('http://localhost:8000/calc/' , {
                    params: {
                      mileage : this.state.highway.num,
                        vehicle: this.state.highway.VehicleType,
                        transponder: this.state.highway.transponder,
                        time: this.state.highway.Time,
                        hour: this.state.highway.hour,

                  }


            })

            .then((response) => {

                this.setState({cost: response.data[0], charge: response.data[1]})
                console.log(response)
         });
}






	render() {



	    console.log(this.state.highway)
        const { highway, cost, charge } = this.state

        return (
        	<div>

				<Grid container spacing={8}>
            <Grid item xs={6}>

                <Paper style={style.paper}>



                    <Fragment>

                        <TextFields

                            handleEditChange={this.handleEditChange}
                            highway={highway}
                            onSubmission={this.onSubmission}
                        />

                        <Typography variant='title'>



                        </Typography>

                    </Fragment>

                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper style={style.paper}>

                  <Fragment>
                    <Typography variant="headline">

                        Applicable Toll Charges



                    </Typography>
                    <Typography variant="title" style={{marginTop:20}}>

                      Total Charge:  $ {cost}
                      <br/>
                        <br/>
                      Transponder Charge: {charge}

                    </Typography>
                  </Fragment>

                </Paper>
            </Grid>
        </Grid>



            </div>
		)
	}



};



ReactDOM.render(<BrowserRouter>
				<div>

					<App/>


					<Switch>
						<Route path="/Yusuf" component={Hello} />

					</Switch>
				</div>
				</BrowserRouter>
	, document.getElementById('root'));

serviceWorker.unregister();
