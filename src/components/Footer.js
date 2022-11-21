import React from "react";

function Footer() {
    return (
        <footer className="container">
            <div className="socials">
                <h3>Contact</h3>             
                <a href="https://github.com/Mbali06" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>

                <a href="mailto: ms.mhluthi@gmail.com">
                    <i className="bi bi-envelope-fill" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>
                <a href="https://www.linkedin.com/in/mbali-luthi-02984a228/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>
                <p>ms.mhluthi@gmail.com</p>
            </div>

            
        </footer>
    )
}

export default Footer;