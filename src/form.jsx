import React, { useState } from 'react';
import PersistState from './usePersistState.ts';
import './form.css';
import { SignedIn, SignOutButton, useUser } from '@clerk/clerk-react';
import { Chart } from 'react-google-charts'

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

function StockForm() {
    const { user } = useUser();
    const [inputFields, setInputFields] = PersistState([
        {name: '', price: ''}
    ])
    const [totalPrice, setTotalPrice] = useState(0)

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

    const totalSpent = () => {
        let data = [...inputFields]
        console.log(data)
        let tempTotal = [totalPrice]
        console.log(tempTotal)
        let res = 0
        for(let i = 0; i < data.length; i++) {
            res = res + parseInt(data[i].price)
        }
        console.log(res)
        setTotalPrice(res)
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
            <h1>Finance Manager</h1>
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
            <div 
                style={{cursor: 'pointer', textDecoration: 'underline'}}
                onClick={downloadCSV}
            >
                Download as CSV
            </div>
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
                <button onClick={addField}>Add More</button>
                <button onClick={submitData}>Submit Data</button>
            </form>
            <div>
                Total Price = {totalPrice ? totalPrice : 'press submit to tally values'}
            </div>
        </div> 
    );
}

export default StockForm;