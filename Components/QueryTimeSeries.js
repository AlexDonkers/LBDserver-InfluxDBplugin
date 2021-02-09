import axios from "axios";

async function queryTimeSeries(database, property) {
  const res = await axios.get(
    "http://localhost:8086/query?db="+database+"&q=SELECT%20*%20FROM%20"+property+"%20order%20by%20desc%20limit%201"
  );
  return res.data.results;
}
export { queryTimeSeries };
