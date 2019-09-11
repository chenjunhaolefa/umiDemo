import React from 'react'
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
  } from 'bizcharts';

class UserAdd extends React.Component{
    render(){
        const data = [
            {
              year: "2001",
              population: 41.8
            },
            {
              year: "2002",
              population: 38
            },
            {
              year: "2003",
              population: 33.7
            },
            {
              year: "2004",
              population: 30.7
            },
            {
              year: "2005",
              population: 25.8
            },
            {
              year: "2006",
              population: 31.7
            },
            {
              year: "2007",
              population: 33
            },
            {
              year: "2008",
              population: 46
            },
            {
              year: "2009",
              population: 38.3
            },
            {
              year: "2010",
              population: 28
            },
            {
              year: "2011",
              population: 42.5
            },
            {
              year: "2012",
              population: 30.3
            }
          ];

          const data1 = [
            {
              year: "1951 年",
              sales: 38
            },
            {
              year: "1952 年",
              sales: 52
            },
            {
              year: "1956 年",
              sales: 61
            },
            {
              year: "1957 年",
              sales: 145
            },
            {
              year: "1958 年",
              sales: 48
            },
            {
              year: "1959 年",
              sales: 38
            },
            {
              year: "1960 年",
              sales: 38
            },
            {
              year: "1962 年",
              sales: 38
            }
          ];
          const cols1 = {
            sales: {
              tickInterval: 20
            }
          };

        return(
            <div>
                <div>
                <Chart height={window.innerHeight} data={data} padding="auto" forceFit>
                    <Coord type="polar" />
                    <Tooltip />
                    <Legend
                        position="right"
                        offsetY={-window.innerHeight / 2 + 180}
                        offsetX={-160}
                    />
                    <Geom
                        type="interval"
                        color="year"
                        position="year*population"
                        style={{
                        lineWidth: 1,
                        stroke: "#fff"
                        }}
                    />
                </Chart>
                </div>
                <div>
                <Chart height={400} data={data1} scale={cols1} forceFit>
                    <Axis name="year" />
                    <Axis name="sales" />
                    <Tooltip
                        crosshairs={{
                        type: "y"
                        }}
                    />
                    <Geom type="interval" position="year*sales" />
                </Chart>
                </div>
            </div>
            
        );
    }
}

export default UserAdd;