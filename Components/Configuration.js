import React , { Component } from 'react'
import { queryTimeSeries } from './QueryTimeSeries';

class Configuration extends Component {
    constructor(props){
        super(props)
        this.state = {
            property: 'Office_Temperature' , //default property
            database: 'Office_DB' ,//default database
            value: 'default measurement',
            time: 'default time'
        }
    }
    // if you click the submit button, a constant data (json object containing property and database) will be updated based on the text in the text boxes
    handleSubmit = async (e) => {
        e.preventDefault()
        const results = await queryTemperature(this.state.database, this.state.property)
        const value = results[0]['series'][0]['values'][0][1]
        const time = results[0]['series'][0]['values'][0][0]
        console.log(value, time)
        this.setState({value})
        this.setState({time})    
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
        const {value} = this.state;
        const {time} =this.state;
        console.log("Results",value)
        console.log("time",time)
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
                  <button>Submit configuration</button>
                </p>
              </form>
            </div>
            <div>
              <h2>RESULT</h2>
              <p>The current state of {property} is</p>
              <p>
              Value: {value}
              </p>
              <p>
              Time: {time}
              </p>
              
            </div>
          </div>
        );
    }
}
export default Configuration