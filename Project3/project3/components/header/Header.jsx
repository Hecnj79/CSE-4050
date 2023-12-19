import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className='prob3Style'>
                    <h1>CSUSB</h1>
                    <h3>We Define the Future</h3>
                    <h4>School of Computer Science & Engineering</h4>
                </div>
            </header>  
        );    
    }
}

export default Header;