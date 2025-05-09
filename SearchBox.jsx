import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { red } from '@mui/material/colors';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);


    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="98474c66790f6416591ff79d0c0c2d3c";

    let getWeatherInfo= async()=>{
        try{
            let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonres=await res.json();
        console.log(jsonres);
        let result={
            city:city,
            temp:jsonres.main.temp,
            tempMin:jsonres.main.temp_min,
            tempMax:jsonres.main.temp_max,
            humidity:jsonres.main.humidity,
            feelsLike:jsonres.main.feels_like,
            weather:jsonres.weather[0].description,
        }
        console.log(result);
        return result;

        }catch(err){
            throw err;
        }
        
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    };
    const handleSubmit =async (event) => {
        try{
            event.preventDefault(); // Prevents page reload
            console.log("Searching for weather in:", city); // Placeholder for actual logic
            setCity("");
          let newInfo= await  getWeatherInfo();
          updateInfo(newInfo); 

        }catch(err){
            setError(true);
        }
       
    };
    return(
        < div className="SearchBox">
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={handleChange}/><br /><br />
        <Button variant="contained"  type='Submit'> Search </Button>
        {error&& <p style={{color:"red"}}>No Such Place Exists</p>}
        </form>
        </div>
    );
};