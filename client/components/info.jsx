import React from 'react';

export default class Info extends React.Component {
  render() {
    return <div className="info">
      <div className="info-title">
        - Our Clients - 
      </div>
      <div className="row">        
        <div className="col-md-2 info-img">
          <img src="logos/mit-logo.jpg"/>
        </div>
        <div className="col-md-2 info-img">
          <img src="logos/harvard-logo.png"/>
        </div>
        <div className="col-md-2 info-img">
          <img src="logos/stanford-logo.png"/>
        </div>
        <div className="col-md-2 info-img">
          <img src="logos/logo-ucberkeley.png"/>
        </div>
        <div className="col-md-2 info-img">
          <img src="logos/uiuc_logo.jpg"/>
        </div>
      </div>
      <hr/>

      <div className="row">        
        <div className="col-md-2 col-md-offset-2">
          <div className="info-item">                
          <ul>            
            <h3>ABOUT</h3>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Docs</a></li>          
          </ul>
          </div>
        </div>

        <div className="col-md-2">         
          <div className="info-item">  
          <ul>
            <h3>CONNECT</h3>
            <li><a href="#">Community</a></li>
            <li><a href="#">Subscribe</a></li>
            <li><a href="#">Email</a></li>            
          </ul>
          </div>
        </div>

        <div className="col-md-2">     
          <div className="info-item">      
          <ul>
            <h3>CONTACT</h3>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Github</a></li>       
          </ul>
          </div>
        </div>        

        <div className="col-md-4">
          <div className="social-media">
          <ul>
            <li><a href="https://www.facebook.com/fatexrebirth" className="fa fa-facebook"></a></li>
            <li><a href="https://twitter.com/fatexrebirth" className="fa fa-twitter"></a></li>
            <li><a href="https://plus.google.com/u/0/100883645402457371181" className="fa fa-google"></a></li>
            <li><a href="https://github.com/fatexrebirth" className="fa fa-github"></a></li>
          </ul>
          </div>
        </div>

      </div>
    </div>
  }
}