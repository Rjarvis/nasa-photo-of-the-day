import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function apiData(){
    const [isLoading, setIsLoading] = useState(false);
    const webAddress = "https://api.nasa.gov/planetary/apod"
    useEffect(()=>{
        setIsLoading(true);
        axios
            .get(webAddress)
            .then(res => {
                console.log(res);
                setIsLoading(false);
            })
            .catch(err =>{
                console.log(err);
                setIsLoading(false);
            });
    },[]);
}