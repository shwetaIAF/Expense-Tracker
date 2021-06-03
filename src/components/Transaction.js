import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//in line-3 in place of structure - {transaction we can use props simply and call props.transaction.text}
export const Transaction = ({transaction}) => { 
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
{transaction.text}<span>{sign}₹{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        
        </li>
    )
}
