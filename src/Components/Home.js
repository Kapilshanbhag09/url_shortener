import React from 'react'
import './Home.css'

function Home() {
    return (
        <div>
            <div className="home_header">
                <div className="home_header_1">
                    <h1 className="home_header_title">KAS</h1>
                </div>
                <div className="home_header_2">
                    <div className="home_header_button1">LINKS</div>
                    <div className="home_header_button2">LOGOUT</div>
                </div>
                
            </div>
            <div className="home_body">
                <div className="home_body1">
                <h1>Shorten your url</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
