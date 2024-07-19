import React, { useState } from "react";
import CSVReader from "react-csv-reader";

const CompareCSV = () => {
    const [dataCSV, setData] = useState([]); 
    const readData = (data) => {
        console.log(data)
        let arr = [];
        
        console.log(arr);
    }
    return (
        <>
        <h1>Compare CSV Files</h1>
        <CSVReader onFileLoaded={(data, fileInfo, originalFile) => readData(data)} />
        </>
    )
}


export default CompareCSV;