import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Test() {

    const [test, setTest] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/hello", { withCredentials: true })
          .then((response) => setTest(response.data.message))
          .catch((error) => console.error(error));
      }, []);


    return (
      <div>{test}</div>
    )
}

export default Test