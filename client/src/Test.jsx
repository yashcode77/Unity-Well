import React, { useEffect, useState } from "react"


export default function Test() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    // Using useEffect for single rendering
    useEffect(() => {
         fetchData();

    }, []);

    const fetchData =  async ()=>{
        try{
            const response = await fetch('http://localhost:5000/data')
            const jsonData= await response.json();
            setdata(jsonData)
        }catch(error){
            console.log('Error', error )
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.date}</p>
                <p>{data.programming}</p>

            </header>
        </div>
    );
}



// ("/data").then(
//     res => res.json()).then((data) => {
//         // Setting a data from api
//         setdata({
//             name: data.Name,
//             age: data.Age,
//             date: data.Date,
//             programming: data.programming,
//         });
//         console.log(data)
//     })