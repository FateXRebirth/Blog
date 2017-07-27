import React from 'react';

export default class Feature extends React.Component {
    render() {
        return (
            <div className="feature">
                <div className="ui grid container">
                    <div className="four wide column">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="material-icons">dashboard</i>
                            </div>
                            <h4>VISUAL EDITING IN BROWSER</h4>
                            <p>Create a website without thinking about content editing. Have content editing layer for free without spending a minute.</p>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="material-icons">subtitles</i>
                            </div>
                            <h4>JEKYLL AND STATIC WEBSITES</h4>
                            <p>We support anything that builds with a Dockerfile, but we optimize the experience for Jekyll and Static Websites.</p></div>
                        </div>
                    <div className="four wide column">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="material-icons">loop</i>
                            </div>
                            <h4>UPLOAD AND SYNC WITH GITHUB</h4>
                            <p>Got a website already? We'll provide the Visual Editing layer then. Create feature branches and Pull Requests with Visual Editor.</p>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="material-icons">airplay</i>
                            </div>
                            <h4>CODE EDITING IN BROWSER</h4>
                            <p>Need to do some bigger design changes? Edit all your CSS, HTML and JavaScript files in your browser.</p></div>
                        </div>               
                </div>
            </div>
        )
    }
 }