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
import DataSet from "@antv/data-set";

class UserAdd extends React.Component {
    render() {
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

        const { DataView } = DataSet;
        const data2 = [
            {
                item: "Design",
                a: 70,
                b: 30
            },
            {
                item: "Development",
                a: 60,
                b: 70
            },
            {
                item: "Marketing",
                a: 50,
                b: 60
            },
            {
                item: "Users",
                a: 40,
                b: 50
            },
            {
                item: "Test",
                a: 60,
                b: 70
            },
            {
                item: "Language",
                a: 70,
                b: 50
            },
            {
                item: "Technology",
                a: 50,
                b: 40
            },
            {
                item: "Support",
                a: 30,
                b: 40
            },
            {
                item: "Sales",
                a: 60,
                b: 40
            },
            {
                item: "UX",
                a: 50,
                b: 60
            }
        ];
        const dv = new DataView().source(data2);
        dv.transform({
            type: "fold",
            fields: ["a", "b"],
            // 展开字段集
            key: "user",
            // key字段
            value: "score" // value字段
        });
        const cols = {
            score: {
                min: 0,
                max: 80
            }
        };

        return (

            <div style={{ flexDirection: "row", display: "flex" }}>
                <div style={{ flex: 1 }}>
                    <Chart data={data} padding="auto" forceFit>
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

                <div style={{ flex: 1 }}>
                    <Chart data={data1} scale={cols1} forceFit>
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

                <div style={{ flex: 1 }}>
                    <Chart
                        data={dv}
                        padding={[20, 20, 95, 20]}
                        scale={cols}
                        forceFit
                    >
                        <Coord type="polar" radius={0.8} />
                        <Axis
                            name="item"
                            line={null}
                            tickLine={null}
                            grid={{
                                lineStyle: {
                                    lineDash: null
                                },
                                hideFirstLine: false
                            }}
                        />
                        <Tooltip />
                        <Axis
                            name="score"
                            line={null}
                            tickLine={null}
                            grid={{
                                type: "polygon",
                                lineStyle: {
                                    lineDash: null
                                },
                                alternateColor: "rgba(0, 0, 0, 0.04)"
                            }}
                        />
                        <Legend name="user" marker="circle" offset={30} />
                        <Geom type="area" position="item*score" color="user" />
                        <Geom type="line" position="item*score" color="user" size={2} />
                        <Geom
                            type="point"
                            position="item*score"
                            color="user"
                            shape="circle"
                            size={4}
                            style={{
                                stroke: "#fff",
                                lineWidth: 1,
                                fillOpacity: 1
                            }}
                        />
                    </Chart>
                </div>
            </div>

        );
    }
}

export default UserAdd;