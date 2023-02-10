//3.2 update option display to read state and update display state, check connection ?
 //test user input search in header: list of countries from  optionDisplay
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";


const OptionDisplay = () => {
    let currentPotentials = useSelector(selectPotentials);
    console.log(currentPotentials);
    const dispatch = useDispatch();
    //const dispatch = useDispatch();
   //xearlier// return <div className="stack">OptionDisplay</div>; 
   //update the state
   return (
   <div className="stack">
        {currentPotentials.map((e, i) => {
            return (
                <h2 key={e.name.official} className="country-option"
                onClick={() => {
                dispatch(setDisplayCountry(currentPotentials[i]));
            }} >

                    {e.name.common}
                </h2>
            );
        })}
    </div>
    );
};
export default OptionDisplay;
/* QQ 3.2
1. why no ./ file path needed to import l3 use selector
USESELECTOR IS A HOOK IN REACT-REDUX SO DONT NEED PATH, ANY LIB REAXCT NOT I CREAT
2. 
*/