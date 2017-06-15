import React from 'react';

export default class Main extends React.Component {
  render() {
    return <div className="container-fluid">
      <header>
        {this.props.header}
      </header>
      <main>
        <hr/>
        {this.props.article}
        <hr/> 
        {this.props.intro}
        <hr/>
        {this.props.feature}    
        <hr/>
        {this.props.info}
      </main>
      <footer>
        <hr/>
        {this.props.footer}
      </footer>
    </div>
  }
}