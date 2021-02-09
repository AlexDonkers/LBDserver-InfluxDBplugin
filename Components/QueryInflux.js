import axios from "axios";

async function queryInflux(database, query) {
  const res = await axios.get(
    "http://localhost:8086/query?db="+database+"&q="+query
  );
  return res.data.results;
}
export { queryInflux };
