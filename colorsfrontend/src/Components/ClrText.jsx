import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
 function ClrText (props) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const url = "https://reqres.in/api/unknown";
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App container">
      <h1>Task 2</h1>
      {data.map((ClrText, index) => ( 
        <div style={{color: ClrText.color}}>   
         {ClrText.name}
         </div>
      ))}
    </div>
  );
}
export default ClrText;