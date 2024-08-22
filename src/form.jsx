import React, { useState } from 'react';
import PersistState from './usePersistState.ts';
import './form.css';
import { SignedIn, SignOutButton, useUser } from '@clerk/clerk-react';
import { Chart } from 'react-google-charts';
import { Link } from 'react-router-dom';

const downloadFile = ({data, fileName, fileType}) => {
    const blob = new Blob([data], {type: fileType})
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvent = new MouseEvent('click', {
        view: window, 
        bubbles: true,
        cancelable: true,
    });
    a.dispatchEvent(clickEvent);
    a.remove();
}

const options = {
    title: "Amount Spent per item",
    chartArea: {width: "50%"},
    hAxis: {
        title: "Items",
        minValue: 0,
    },
    vAxis: {
        title: "Price"
    },
}; 

function StockForm() {
    const { user } = useUser();
    const [inputFields, setInputFields] = PersistState([
        [{name: '', price: ''}]
    ])
    const [totalPrice, setTotalPrice] = useState(0);
    const [graphinput, setGraphinput] = useState([]);
    const [budget, setBudget] = useState(0);

    const handleChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addField = () => {
        let newField = {name : '', price : ''}
        setInputFields([...inputFields, newField])
    }

    const submitData = (e) => {
        e.preventDefault();
        totalSpent();
    }

    const setDataForGraph = (data) => {
        console.log(data)
        let temp = [...graphinput]
        console.log(temp)
        let graphData = []
        for(let i = 0; i < data.length; i++) {
            graphData.push([data[i].name, parseInt(data[i].price)])
        }
        graphData.unshift(['name', 'price'])
        console.log(graphData)
        return graphData;
    }

    const totalSpent = () => {
        let data = [...inputFields]
        let temp = setDataForGraph(data)
	let res = 0
        for(let i = 0; i < data.length; i++) {
            res = res + parseFloat(data[i].price)
        }
	let curBudget = budget;
	setBudget(budget => budget - res);
        setTotalPrice(res)
        setGraphinput(temp)
    }

    const removeField = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data);
    }

    const downloadCSV = () => {
        let data = [...inputFields]
        let headers = ['Name, Price']
        let userCSV = data.reduce((acc, user) => {
            const {name, price} = user
            acc.push([name, price].join(','))
            return acc
        }, []);
        downloadFile({
            data: [...headers, ...userCSV].join('\n'), 
            fileName: 'price.csv', 
            fileType: 'text/csv',
        });
    }

    return (
        <div className='userForm'>
            <h1>Personal Finance Manager</h1>
            <div className='signoutbutton'>
                <div>
                    {user ? 
                    <>
                        <div className='sub'>
                            Signed in with {user.primaryEmailAddress.emailAddress}
                        </div>    
                    </> : null}
                </div>
                <div className='sub'>
                    <SignedIn>
                        <SignOutButton>
                            <input className={'inputButton'} type="button" value={'Log out'} />
                        </SignOutButton>
                    </SignedIn>
                </div>
            </div>
            <div className='helppage'>
                Don't know how to get started? <br />
                Click <Link to='/help'>here</Link> to go to the help page!
            </div>
            <div 
                style={{cursor: 'pointer', textDecoration: 'underline'}}
                onClick={downloadCSV}
                className='csvDownload'
            >
                Download as CSV
            </div>
	    <label> Input a Target Budget: <input value = {budget} onChange={e => setBudget(e.target.value)}/>
	    </label>
            <form onSubmit={submitData}>
                {
                    inputFields.map((input, index) => {
                        return (
                            <div key={index}>
                            <input
                                name = "name"
                                placeholder='name' 
                                value={input.name}
                                onChange={event => handleChange(index, event)}
                            />
                            <input  
                                name = "price"
                                placeholder='price'
                                value={input.price}
                                onChange={event => handleChange(index, event)}
                            />
                            <button onClick={() => removeField(index)}>Remove</button>
                            </div>
                        )
                    })
                }
                <button onClick={addField} className='addMoreButton'>Add More</button>
                <button onClick={submitData}>Submit Data</button>
                <div>
                {totalPrice && inputFields ? 
                <>
                <div>Total Price: {totalPrice}</div>
		<div>Remaining Budget Left: {budget} </div>
                <Chart
                 chartType="PieChart"
                 data={graphinput}
                 options={options}
                 width={"100%"}
                 height={"400px"}
                />
                </>
                : 
                'press submit to display values'}
                </div>
            </form>
        </div> 
    );
}

export default StockForm;
