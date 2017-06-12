import React from 'react';

export default class Layout extends React.Component {
  render() {
    return <div className="container-fluid">
      <header>
        {this.props.header}
      </header>
      <main>
        {this.props.article}
        {this.props.intro}
        {this.props.feature}        
        {this.props.info}
      </main>
      <footer>
        {this.props.footer}
      </footer>
    </div>
  }
}