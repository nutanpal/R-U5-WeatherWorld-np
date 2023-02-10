//6.7 b You should now see the current weather of the displayCountry’s capital appearing in your browser’s console.
/////////////////////////////////////
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
const Weather = () => {
    const [weather, setWeather] = useState();
    let display = useSelector(selectDisplay);
    let latitude = display.capitalInfo.latlng[0];
    let longitude = display.capitalInfo.latlng[1];
    // ------------------------------------
    // 6.7 rapidAPI.com PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
    // Inside the “params” property of the options object, supply the “q” property the coordinates of your latitude and longitude variables as template literal
    // ------------------------------------
    
    useEffect(() => {
        //const axios = require("axios");

        const options = {
            method: "GET",
            url: "https://weatherapi-com.p.rapidapi.com/current.json",
            params: { q: `${latitude}, ${longitude}` },
            headers: {
                "X-RapidAPI-Key":
                  `${REACT_APP_WEATHER_API_KEY}`,
                "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
        };
//nside of the .then statement of the axios call, use then QQ?“setWeather” method to set local state to response.data
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setWeather(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);
//nside the return of the functional component, reference the local state variable called “weather” to display the necessary properties of the local weather.
// create a new td element for each one of these properties.
    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather?.current?.wind_mph} mph{" "}
                        {weather?.current?.wind_dir}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
