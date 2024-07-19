import React, { useState } from "react";
import CSVReader from "react-csv-reader";

const CompareCSV = () => {
    const [dataCSV, setData] = useState([]); 
    const [secondData, setSecond] = useState([]);

    const readData1 = (data) => {
        for(let i = 0; i < data.length; i++) {
            dataCSV.push(data[i][1])
        }
    }

    const readData2 = (data) => {
        for(let i = 0; i < data.length; i++) {
            secondData.push(data[i][1])
        }
    }

    return (
        <>
        <h1>Compare CSV Files</h1>
        <CSVReader onFileLoaded={(data) => readData1(data)} />
        <div>
            <CSVReader onFileLoaded={(data) => readData2(data)} />
        </div>
        </>
    )
}


export default CompareCSV;