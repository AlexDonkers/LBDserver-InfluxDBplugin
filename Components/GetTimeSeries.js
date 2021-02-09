import React, { useState, useEffect } from "react";
import axios from "axios";

function GetTimeSeries() {
  const [measurements, setMeasurements] = useState([]);
  const database = "Office_DB"
  const property = "Office_Temperature"


  useEffect(() => {
    axios
      .get("http://localhost:8086/query?db="+database+"&q=SELECT%20*%20FROM%20"+property+"%20order%20by%20desc%20limit%201")
      .then((res) => {
        console.log(res);
        setMeasurements(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <h2>RESULT</h2>
      <p>The current state of {property} is</p>
      <p>
        Value
        {measurements.map((measurement) => (
          <p key={measurement.series[0]["values"][0][0]}>
            {measurement.series[0]["values"][0][1]}
          </p>
        ))}
      </p>
      <p>
        Time (GMT+0):
        {measurements.map((measurement) => (
          <p key={measurement.series[0]["values"][0][1]}>
            {measurement.series[0]["values"][0][0]}
          </p>
        ))}
      </p>
    </div>
  );
}

export default GetTimeSeries;
