import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ dates, keys, times }) {
    const [timeKey, setTimeKey] = useState("");
    const chartData = {
        labels: keys,
        datasets: [
            {
                label: "no of deliveries booked on the day",
                data: keys.map((data) => dates[data].length),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    }
    const opts = {
        responsive: true,
        onClick: (e, elements) => {
            setTimeKey(keys[elements[0].index]);
        }
    };

    return <>
    <div style={styles.barContainer}>
        <div style={{ width: "600px" }}>
            <Bar
                data={chartData}
                options={opts}
            />
        </div>
        <hr />
        
        <hr />
        <div style={{ width: "600px" }}>
            {timeKey?<>
            <div style={styles.dateContainer}>Booked on date<br/>{timeKey}</div>
            <BarChartSub times={times} timeKey={timeKey} />
            </>:
            <>
            Click on any of the booking dates in the graph to see further details
            </>
            }
        </div>
    </div>
    </>
}

export default BarChart;

function BarChartSub({ times, timeKey }) {
    console.log(timeKey)
    if (!timeKey) return <></>
    const chartData = {
        labels: ["12am to 03am", "03am to 06am", "06am to 09am", "09am to 12pm", "12pm to 03pm", "03pm to 06pm", "06pm to 09pm", "09pm to 12am"],
        datasets: [
            {
                label: "no of deliveries for the slot",
                data: times[timeKey].map(val => val),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    }

    return <Bar
        data={chartData}
    />;
}

const styles={
    barContainer:{
        display:"flex",
    },
    dateContainer:{
        textAlign:"right",
        marginVertical:"3px"
    }
}