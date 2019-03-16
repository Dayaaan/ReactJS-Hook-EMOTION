import React, { useState } from 'react';

const ButtonHook = ({name}) => {
    console.log(useState('bonjour'));
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('bonjour');
    const handleClick = () => {
        setCount(count+1);
        if (count > 5) {
            setMessage('Hehe');
        };
    }
    return (
        <button type="button" onClick={handleClick}>
            {name} {count} {message}
        </button>
    );
};


export default ButtonHook;