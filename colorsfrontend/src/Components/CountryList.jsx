import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
 function CountryList(props) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const url = "https://restcountries.com/v3.1/all";
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App container">
      <h1>Question2-Task 1&2</h1>
      {data.map((CountryList, index) => (    
         <p> 
          {CountryList.name.official}<br></br>{CountryList.flag}</p>
      
      ))}
    </div>
  );
}
export default CountryList;