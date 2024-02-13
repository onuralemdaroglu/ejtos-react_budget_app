import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary'> {Currency.value}<span>Currency</span> {
            <select name='Currency' id="Currency" style={{backgroundColor: 'lightgreen', borderRadius: '5px'}} onChange={event=>changeCurrency(event.target.value)}>
                <option value='€'>€ Euro</option>
                <option value='£'>£ Pound</option>
                <option value='$'>$ Dollar</option>
                <option value='₹'>₹ Ruppee</option>
            </select>
        }
        </div>
    );
};

export default Currency;