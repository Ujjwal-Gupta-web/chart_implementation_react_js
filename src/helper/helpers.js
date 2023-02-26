const obj=require('./data')

export const get_schedule_dates=(input_data)=>{
    let res=(obj.filter((x)=>x.item_date===input_data));
    const dates={};
    const times={};
    for(let i of res) {
        let dt=i.schedule_time.slice(0,10);
        if(!dates.hasOwnProperty(dt)){
            dates[dt]=[];
        }
            dates[dt].push(i);
    }

    for(let i in dates) {
        let tm=i;
        if(!times.hasOwnProperty(tm)){
            times[tm]=[0,0,0,0,0,0,0,0];
        }
        for(let x of dates[i]){
            times[tm][get_index(x.schedule_time.slice(11))]++;
        }
    }
    console.log("TIMES OF HELPER : ", times);
    return {dates,times};
}


const get_index=(inputTime)=>{
    if(inputTime>="00:00:00" && inputTime<="03:00:00") return 0;
    else if(inputTime>"03:00:00" && inputTime<="06:00:00") return 1;
    else if(inputTime>"06:00:00" && inputTime<="09:00:00") return 2;
    else if(inputTime>"09:00:00" && inputTime<="12:00:00") return 3;
    else if(inputTime>"12:00:00" && inputTime<="15:00:00") return 4;
    else if(inputTime>"15:00:00" && inputTime<="18:00:00") return 5;
    else if(inputTime>"18:00:00" && inputTime<="21:00:00") return 6;
    else if(inputTime>"21:00:00" && inputTime<="24:00:00") return 7;
}