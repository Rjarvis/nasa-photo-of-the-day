import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiCard from "./ApiCard.js";

export default function ApiData() {
    const [isLoading, setIsLoading] = useState(false);
    const [imageToUse, setImageToUse] = useState([]);
    const webAddress = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    useEffect(()=>{
        setIsLoading(true);
        axios
            .get(webAddress)
            .then(res => {
                console.log(res);
                setImageToUse(res.data.url)
                setIsLoading(false);
            })
            .catch(err =>{
                console.log(err);
                setIsLoading(false);
            });
    },[]);

    return(
        <div>
            <ApiCard image={imageToUse}/>
        </div>
    );
}