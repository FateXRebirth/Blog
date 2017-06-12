import React from 'react';

export default class Article extends React.Component {
  render() {
    return <div className="article">
      <div className="article-title">
        - Who use Blog? -
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="article-item">
          <p>"It's so simple -- as both a manager and a user. And it doesnt have too many bells and whistles that make things confusing. Just the right price too."</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="article-item">
          <p>"Makes group email lists really easy to use and administer - Fast and reliable - Constantly improving - Great web design."</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="article-item">
          <p>"Gaggle mail is working well for a small nonprofit group that I support. It is perfect for creating a distribution list that we can all send to."</p>  
          </div>
        </div>
      </div>
    </div>
  }
}