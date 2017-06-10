import React from 'react';

export default class Layout extends React.Component {
  render() {
    return <div>
      <header>
        {this.props.header}
        {this.props.navbar}
      </header>
      <main>
        {this.props.intro}
        {this.props.info}
      </main>
      <footer>
        {this.props.footer}
      </footer>
    </div>
  }
}