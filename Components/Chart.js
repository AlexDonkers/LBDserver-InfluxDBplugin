import React , { Component, useEffect } from 'react'
import { query10TimeSeries } from './Query10TimeSeries';
import TimeSeriesChart from './TimeSeriesChart';


class Chart extends Component {
    constructor(props){
        super(props)
        this.state = {
            property: 'Office_Temperature' , //default property
            database: 'Office_DB' ,//default database
            res: 'default res',
        }
    }

    // if you click the submit button, a constant data (json object containing property and database) will be updated based on the text in the text boxes
    handleSubmit = async (e) => {
        e.preventDefault()
        const results = await query10TimeSeries(this.state.database, this.state.property)
        const res = results[0]['series'][0].values
        console.log(res)
        this.setState({res})
      }  
 
    handleInputChange = (event) => {
        event.preventDefault()
        console.log("You entered ",event.target.value," as the ",event.target.name,". Please click submit.")
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleInputChange2 = (event2) =>{
        event2.preventDefault()
        console.log("You entered ",event2.target.value," as the ",event2.target.name,". Please click submit.")
        this.setState({
            [event2.target.name]: event2.target.value
        })
    }

    render() {
        const {property} = this.state;
        const {database} = this.state;
        const {res} = this.state;
        console.log("res",res)
        // console.log("Series", series)

        return (
          <div>
            <div>
              <h2>CONFIGURATION</h2>
              <p>Database: {database}</p>
              <p>Property: {property}</p>
              <form onSubmit={this.handleSubmit}>
                <p>
                  <input
                    type="text"
                    placeholder="database"
                    name="database"
                    onChange={this.handleInputChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="property"
                    name="property"
                    onChange={this.handleInputChange2}
                  />
                </p>
                <p>
                  <button>Create chart</button>
                </p>
              </form>
            </div>
            <div>
              <h2>CHART</h2>
              <p>The last 10 states of {property} were</p>
              <TimeSeriesChart property={property} t0={res[9][0]} t1={res[8][0]} t2={res[7][0]} t3={res[6][0]} t4={res[5][0]} t5={res[4][0]} t6={res[3][0]} t7={res[2][0]} t8={res[1][0]} t9={res[0][0]} v0={res[9][1]} v1={res[8][1]} v2={res[7][1]} v3={res[6][1]} v4={res[5][1]} v5={res[4][1]} v6={res[3][1]} v7={res[2][1]} v8={res[1][1]} v9={res[0][1]}/>

              <h2>DATA</h2>
              <p>{res[9][0]}: {res[9][1]}</p>
              <p>{res[8][0]}: {res[8][1]}</p>
              <p>{res[7][0]}: {res[7][1]}</p>
              <p>{res[6][0]}: {res[6][1]}</p>
              <p>{res[5][0]}: {res[5][1]}</p>
              <p>{res[4][0]}: {res[4][1]}</p>
              <p>{res[3][0]}: {res[3][1]}</p>
              <p>{res[2][0]}: {res[2][1]}</p>
              <p>{res[1][0]}: {res[1][1]}</p>
              <p>{res[0][0]}: {res[0][1]}</p>
              <p>
              </p>
            </div>
          </div>
        );
    }
}
export default Chart