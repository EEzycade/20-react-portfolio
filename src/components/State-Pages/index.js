import React, { useState } from 'react';
import About from '../About';
import Contact from '../Contact';
import Nav from '../Nav';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function StatePages () {

    const [currentPage, setCurrentPage] = useState('About');

    const displayPage = () => {
        switch (currentPage) {
            case 'Contact':
                return <Contact />;
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />
            case 'Resume':
                return <Resume />
            default:
                return <About />
        }
    }

    return (
        <div>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div>{displayPage(currentPage)}</div>
        </div>
    )
}

export default StatePages;