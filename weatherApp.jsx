import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function weatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Dehradun",
        feelslike:24,
        temp:24,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"Haze"
    }); 

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);

    };
    return (
        <div style={{textAlign:"center"}}>
            <h2>WEATHER APP BY ME</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}