import React from 'react';

export default class Intro extends React.Component {
  render() {
    return <div className="intro">
      <div className="intro-title">
        - Why use Blog? - 
      </div>

      <div className="intro-context">
      <p>Fed up with over-priced or over-complicated service options when you simply want everyone in your group to be able to email everyone else?</p>
      <p>Annoyed by the advertising on free services, or the time you need to spend managing a listserv, when you just need something that works?</p>
      <p>Gaggle Mail offers the most straightforward group email service for your club, association, office, society, family and more. It’ll just take you a few clicks to set up your own permanent group email account, then customise how your group works and how the messages look.</p>
      <p>Make managing your group email list simple and easy - whether you’re a sports team, church group, book club, networking society, housing association, non-profit organisation or anything else.</p>
      </div>

      <div className="intro-button">
        <ul>
          <li><a className="btn btn-success btn-lg">Sign up now</a></li>
          <li><a className="btn btn-success btn-lg">Learn more</a></li>
        </ul>
      </div>
    </div>
  }
}