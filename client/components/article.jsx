import React from 'react';

export default class Article extends React.Component {
  render() {
    return <div className="article">
      <div className="row">
        <div className="col-md-4">
          <p>"It's so simple -- as both a manager and a user. And it doesnt have too many bells and whistles that make things confusing. Just the right price too."</p>
          <span>Scott</span>
          <span>California, United States</span>
        </div>
        <div className="col-md-4">
          <p>"Makes group email lists really easy to use and administer - Fast and reliable - Constantly improving - Great web design."</p>
          <span>Sam</span>
          <span>Brighton, England</span>
        </div>
        <div className="col-md-4">
          <p>"Gaggle mail is working well for a small nonprofit group that I support. It is perfect for creating a distribution list that we can all send to."</p>
          <span>Jessica</span>
          <span>Texas, United States</span>
        </div>
      </div>
    </div>
  }
}