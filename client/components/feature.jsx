import React from 'react';

export default class Feature extends React.Component {
  render() {
    return <div className="feature">
      <div className="feature-title">
        - Feature - 
      </div>
      <div className="row">        
        <div className="col-md-3">
          <div className="feature-item">
            <div className="feature-icon">
            <i className="material-icons">dashboard</i>
            </div>
            <h4>VISUAL EDITING IN BROWSER</h4>
          <p>Create a website without thinking about content editing. Have content editing layer for free without spending a minute.</p></div>
          </div>
        <div className="col-md-3">
          <div className="feature-item">
            <div className="feature-icon">
            <i className="material-icons">subtitles</i>
            </div>
            <h4>JEKYLL AND STATIC WEBSITES</h4>
          <p>We support anything that builds with a Dockerfile, but we optimize the experience for Jekyll and Static Websites.</p></div>
          </div>
        <div className="col-md-3">
          <div className="feature-item">
            <div className="feature-icon">
            <i className="material-icons">loop</i>
            </div>
            <h4>UPLOAD AND SYNC WITH GITHUB</h4>
          <p>Got a website already? We'll provide the Visual Editing layer then. Create feature branches and Pull Requests with Visual Editor.</p></div>
          </div>
        <div className="col-md-3">
          <div className="feature-item">
            <div className="feature-icon">
            <i className="material-icons">airplay</i>
            </div>
            <h4>CODE EDITING IN BROWSER</h4>
          <p>Need to do some bigger design changes? Edit all your CSS, HTML and JavaScript files in your browser.</p></div>
          </div>
      </div>
      <div className="feature-button">
        <p>You build an incredible website.</p>
        <p>We help you manage the content.</p>
        <a href="#" className="btn btn-success btn-lg">Create Now</a>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md-6 feature-text">
          <h5>Manage your installations remotely!</h5>
          <p>Kiosk Browser Remote is our subscription based remote management console for Kiosk Browser. It provides central management functions for all your devices.</p>
          <blockquote>
					A subscription costs just £1 GBP / $1.60 USD <strong>per device</strong> <em>per month (volume pricing is available).</em><br/>
					We offer a free 14 day trial with no obligation to subscribe once the trial ends.
					</blockquote>
          <p><span>PRO</span> features are included in the subscription.</p>
        </div>
        <div className="col-md-6 feature-img">
          <img src="images/remote_illustration.png"/>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md-6 feature-img">
          <img src="images/customise_illustration.png"/>
        </div>
        <div className="col-md-6 feature-text">
          <h5>Get Branded Version</h5>
          <p>We offer a customisation service whereby we can create a custom version of Kiosk Browser with your logo, application name, default URL and many other default settings.</p>
					<ul>
						<li>Customised APK file</li>
						<li>Request a new APK whenever a new version of Kiosk Browser is released</li>
						<li>Fully compatible with our remote management service</li>
						<li>Embed licence keys or remote registration keys</li>
						<li>Embed a local start page for advanced onboarding procedures</li>
					</ul>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md-6 feature-text">
          <h5>Support &amp; Documentation</h5>
          <p>Our first class support is provided through our <a href="https://kioskbrowser.userecho.com/" target="_blank">Support Portal &amp; Knowledge Base</a>.</p>
					<ul >
						<li>
							Log private support tickets
						</li>
						<li>
							Post public feature requests
						</li>
						<li>
							Speak to us via live chat
						</li>
						<li>
							Browse a wide-array of FAQs, tutorials, articles and code samples
						</li>
					</ul>
        </div>
        <div className="col-md-6 feature-img">
          <img src="images/support_illustration.png"/>
        </div>
      </div>
        
    </div>
  }
}
