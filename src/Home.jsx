import React, { useState } from 'react'
import BarChart from './Charts/BarChart';
import { get_schedule_dates } from './helper/helpers'

const Home = () => {

    const [dates, setDates] = useState({});
    const [times, setTimes] = useState({});
    const [keys, setKeys] = useState([]);
    const [inputDate, setInputDate] = useState("__-__-____");

    console.log(dates);
    // console.log("KEYS", keys);
    return (
        <div>
            <h3>MEAL_FULL DASHBOARD</h3>

            <div style={styles.card}>
            <h4>Delivery Date : {inputDate}</h4>
                <div style={styles.selectDate}>
                        Select Delivery date
                        <br/>
                        <input
                        type='date'
                        onChange={(e) => {
                            // setInputDate("2021-11-27");
                            setInputDate(e.target.value);
                            const input = e.target.value;
                            const res_obj = get_schedule_dates(input);
                            let res = res_obj.dates;
                            let res2 = res_obj.times;
                            setDates(res);
                            setTimes(res2);
                            // console.log("DATES",res);
                            // console.log("TIMES",res2);
                            let arr = [];
                            for (let i in res) {
                                arr.push(i);
                            }
                            setKeys(arr);
                        }}
                    />
                </div>
                {inputDate && <BarChart dates={dates} keys={keys} times={times} />}
            </div>


        </div>
    )
}


export default Home

const styles = {
    card: {
        padding: "15px",
        margin: "10px",
        borderRadius:"10px 10px 10px 10px",
        boxShadow:"-3px 4px 10px grey"
    },
    selectDate:{
        textAlign:"left",
        marginVertical:"3px"
    }
}