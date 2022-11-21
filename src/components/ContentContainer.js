import React, { useState } from "react";
import Nav from "./Nav";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Footer from "./Footer";

function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />
            case 'Resume':
             return <Resume />
            default:
                return <About />
        }
    }

    return (
        <div className="portfolio">
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main className="container">
                {renderPage(currentPage)}
            </main>
            <Footer />
        </div>
    )
}

export default Portfolio;