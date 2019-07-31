import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function apiData(){
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        axios
            .get(/*webAddressGoesHere*/)
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