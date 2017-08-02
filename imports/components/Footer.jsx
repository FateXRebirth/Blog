import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <p className="message"> Follow me </p>
                <div className="social-links">
                    <ul>
                        <li><i className="facebook square icon"></i></li>
                        <li><i className="github square icon"></i></li> 
                        <li><i className="google plus square icon"></i></li>
                        <li><i className="linkedin square icon"></i></li>
                        <li><i className="twitter square icon"></i></li>
                        <li><i className="youtube square icon"></i></li>
                        <li><i className="stack overflow icon"></i></li>                   
                        <li><i className="codepen icon"></i></li>
                    </ul>      
                </div>
                <p className="copyright">© 2012-2017 &emsp; Fate:Rebirth &emsp; All Rights Reserved.</p>
                <div className="page-links">
                    <ul>
                        <li><p className="text">About</p></li>
                        <li><p>&emsp; | &emsp;</p></li>
                        <li><p className="text">Disclaimer</p></li>
                        <li><p>&emsp; | &emsp;</p></li>   
                        <li><p className="text">Code license</p></li>
                        <li><p>&emsp; | &emsp;</p></li>
                        <li><p className="text">Third party licenses</p></li>
                        <li><p>&emsp; | &emsp;</p></li>
                        <li><p className="text">Sitemap</p></li>
                    </ul>      
                </div>
            </footer>
        )
    }
}