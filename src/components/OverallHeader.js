import React from 'react';
import { Link } from 'react-router-dom';

const OverallHeader = () => {
    const style = {
        margin: 5,
        fontSize: 15
    }
    return (
        <div>
            <Link to='/evens-or-odds'><button style={style}>Evens or odds</button></Link>
            <Link to='/higher-card'><button style={style}>Higher card</button></Link>
        </div>
    )
}

export default OverallHeader;