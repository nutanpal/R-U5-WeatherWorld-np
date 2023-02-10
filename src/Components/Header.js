//  Part 3: Api call to restcountries API and store in global state
//update global state : Display the List of Potential Countries: add func to header component to update state with list of potential countries.
// Read global state: add func to option display comp to read state and display that contries list

import axios from "axios";
import React, { useState } from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
    deletePotentialCountries,
    setPotentialCountries,
} from "../redux/slices/potentialCountriesSlice";

//Part 5: Use displayCountry state in the React Application
// 5.2 update option dispaly & header display
import {
    selectDisplay,
    deleteDisplayCountry,
} from "../redux/slices/displayCountrySlice";

//functional component
const Header = () => {
    const [input, setInput] = useState();
    let dispatch = useDispatch();
    let currentDisplay = useSelector(selectDisplay);
    return (
        <div className="header">
            <div className="home">
                <BsFillFlagFill
                    style={{ marginRight: "10px" }}
                    fontSize="1.6em"
                />
                <h3 className="home-country"> 
                    {currentDisplay && currentDisplay.name.common} 
                </h3>
            </div>
            <div className="country-input">
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        axios
                            .get(`https://restcountries.com/v3.1/name/${input}`)
                            .then((res) => {
                                console.log(res.data);
                                dispatch(deleteDisplayCountry());
                                dispatch(deletePotentialCountries());
                                dispatch(setPotentialCountries(res.data));
                            })
                            .catch((err) => {
                                alert(
                                    "No countries found that match your search!"
                                );
                            });
                    }}
                >
                    search
                </button>
            </div>
        </div>
    );
};

export default Header;


/*
l29 checking to see if there is anything currently set on the displayCountry state, and if there is, it will display the common name of that country.
You should now see the name of the selected country appear in the header when you click on that country in the list.

-button element that, when clicked, makes an API call to restcountries.com.

QQ 1. then statement of the axios call, dispatch the “deleteDisplayCountry” action, being sure to invoke it ? methods to del in slices runin order written
*/