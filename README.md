# LBDserver-InfluxDBplugin
A plugin for the LBDserver, which integrates time-series data stored in InfluxDB to the viewer.
The InfluxDBplugin has been created by Alex Donkers, Eindhoven University of Technology. 

# How to install
After correctly installing the [LBDserver](https://github.com/LBDserver), you could download the plugin [here](https://github.com/AlexDonkers/LBDserver-InfluxDBplugin/archive/main.zip). Paste the folder in the plugins folder of the LBDserver (LBDserver\front-react\src\plugins\) and add the following lines of code to LBDserver\front-react\src\plugins\pluginDictionary.js:

On top of the file:
```
import LBDserver-InfluxDBplugin-main from "./LBDserver-InfluxDBplugin-main";
```
in const pluginDictionary = {

```
InfluxDBplugin: LBDserver-InfluxDBplugin-main,
```

To get the chart functionality working, you probably need to install [chart.js](https://www.chartjs.org/docs/latest/getting-started/installation.html) using ```npm install chart.js --save```

# How to use
The plugin sends GET requests to an InfluxDB database running on localhost:8086 (default). You can download InfluxDB [here](https://portal.influxdata.com/downloads/). More documentation on using InfluxDB could be found [here](https://docs.influxdata.com/influxdb/v1.8/tools/shell/).

The plugin has 3 tabs, which allow you to query data in different ways. 
1. The first tab needs a [database](https://docs.influxdata.com/influxdb/v1.8/concepts/glossary/#database) and a property (refered to as '[measurement](https://docs.influxdata.com/influxdb/v1.8/concepts/glossary/#measurement) in InfluxDB). 
2. The second tab requires a [database](https://docs.influxdata.com/influxdb/v1.8/concepts/glossary/#database) and an [InfluxQL](https://docs.influxdata.com/influxdb/v1.8/query_language/explore-data/#the-basic-select-statement) query. Example:
```SELECT * FROM Office_Temperature LIMIT 10)``` 
3. The third tab requires similar input as the first tab, but returns the latest 10 values in a chart.

![snippet of the plugin](https://i.ibb.co/ZH8sQ59/Influx-DBplugin.png)

# The LBDserver
Please visit the [LBDserver](https://github.com/LBDserver) github for more information about the main software tool. 

# Future work
I'm planning to create interaction with the viewer, so that a user could click on elements and an InfluxDB query will result the temperature of the room these elements are in.
I'm also working on a SPARQL tab, where the user could query a sensor using SPARQL after which an InfluxDB query will result the most recent sensor value in the database.

If you have some ideas to improve this tool, please raise an issue.
