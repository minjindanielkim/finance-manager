import React, {useState} from 'react';
import jsonData from './tempData.json'
import StockForm from './form';

function TableData() {
    const [stockData, setStockData] = useState(jsonData);
    const tableRows = stockData.map((info) => {
        return (
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.price}</td>
            </tr>
        );
    });

    const addRows = (data) => {
        const totalStock = stockData.length;
        data.id = totalStock + 1;
        const updatedStockData = [...stockData];
        updatedStockData.push(data);
        setStockData(updatedStockData);
    };

    return (
        <div>
            <table className="table table-stripped">
                <thread>
                    <tr>
                        <th>Stock # </th>
                        <th>Name</th>
                        <th>price</th>
                    </tr>
                </thread>
                <tbody>{tableRows}</tbody>
            </table>
            <StockForm func={addRows} />
        </div>
    );
}

export default TableData; 