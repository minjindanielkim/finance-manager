import React, { useState } from 'react';

function StockForm(props) {
    const [inputFields, setInputFields] = useState([
        {name: '', price: ''}
    ])

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
        // console.log(inputFields[0].price)
        totalSpent();
    }

    function totalSpent() {
        console.log(inputFields)
        let res = 0
        for(let i = 0; i < inputFields.length; i++) {
            res = res + parseInt(inputFields[i].price)
            console.log(res)
        }
        return res;
    }

    const removeField = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data);
        console.log(inputFields)
    }

    return (
        <div className='userForm'>
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
                Total Amount Spent: {totalSpent}
            </div>
        </div>
    );
}

export default StockForm;