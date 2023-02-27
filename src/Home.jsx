import React, { useState } from 'react'
import BarChart from './Charts/BarChart';
import { get_schedule_dates } from './helper/helpers'

const Home = () => {

    const [dates, setDates] = useState({});
    const [times, setTimes] = useState({});
    const [keys, setKeys] = useState([]);
    const [inputDate, setInputDate] = useState("");

    console.log(dates);
    // console.log("KEYS", keys);
    return (
        <div>
            Home
            <br />
            <br /><hr />
            <input
                type='date'
                onChange={(e) => {
                    setInputDate("2021-11-27");
                    const input = "2021-11-27";
                    // console.log("INPUT DATE : ", input);
                    const res_obj = get_schedule_dates(input);
                    let res=res_obj.dates;
                    let res2=res_obj.times;
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

            <br />
            <br /><hr />

            <h4>Event Date : {inputDate}</h4>
            


            
        {inputDate && <BarChart dates={dates} keys={keys} times={times}/>}
      
        </div>
    )
}

const Card = ({ datekey, dates,times }) => {
    const [isVisible, setIsVisible] = useState(false);
    return <>
        <div
            style={{ border: "1px solid black", padding: "5px", margin: "3px", background: "cyan" }}>
            <h4 onClick={() => {
                setIsVisible(!isVisible);
            }
            }>
                Scheduled on : {datekey} ({dates[datekey].length})
            </h4>
            {isVisible && <div style={{ background: "pink", padding: "5px", margin: "5px" }}>
                {times[datekey].map((val,index) => {
                    return(
                        val>0 && <>{getInterval(index)} : {val} <hr/></>
                )})}
            </div>}
        </div>
    </>
}

export default Home

const getInterval=(index)=>{
    if(index===0) return("12am to 03am");
    else if(index===1) return("03am to 06am");
    else if(index===2) return("06am to 09am");
    else if(index===3) return("09am to 12pm");
    else if(index===4) return("12pm to 03pm");
    else if(index===5) return("03pm to 06pm");
    else if(index===6) return("06pm to 09pm");
    else if(index===7) return("09pm to 12am");
}

// {
//     inputDate !== "" && keys.length > 0 ? keys.map(key => <p>
//         {/* {console.log("KEY : ",key)} */}
//         <Card datekey={(key)} dates={dates} times={times}/>
//         <hr />
//     </p>) : <>NO records found</>
//     }