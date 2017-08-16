import React from 'react'
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { } from '../actions/auth.js';


class Post extends React.Component {
    render() {
        return(
            <div className="postPage">
                <div className="ui container">
                    <div className="ui piled segment">
                        <h1 className="ui header">First header</h1>
                        <img className="ui small left floated image" src="/images/vscode.png"/>
                        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                        <img className="ui small right floated image" src="/images/vscode.png"/>
                        <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                        <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
                    </div>
                    <div className="ui comments">
                        <h3 className="ui dividing header">Comments</h3>
                        <div className="comment">
                            <a className="avatar">
                            <img src="/icons/1497280753_blog.png"/>
                            </a>
                            <div className="content">
                            <a className="author">Matt</a>
                            <div className="metadata">
                                <span className="date">Today at 5:42PM</span>
                            </div>
                            <div className="text">
                                How artistic!
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                            </div>
                        </div>
                        <div className="comment">
                            <a className="avatar">
                            <img src="/icons/1497280753_blog.png"/>
                            </a>
                            <div className="content">
                            <a className="author">Elliot Fu</a>
                            <div className="metadata">
                                <span className="date">Yesterday at 12:30AM</span>
                            </div>
                            <div className="text">
                                <p>This has been very useful for my research. Thanks as well!</p>
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                            </div>
                            <div className="comments">
                            <div className="comment">
                                <a className="avatar">
                                <img src="/icons/1497280753_blog.png"/>
                                </a>
                                <div className="content">
                                <a className="author">Jenny Hess</a>
                                <div className="metadata">
                                    <span className="date">Just now</span>
                                </div>
                                <div className="text">
                                    Elliot you are always so right :)
                                </div>
                                <div className="actions">
                                    <a className="reply">Reply</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="comment">
                            <a className="avatar">
                            <img src="/icons/1497280753_blog.png"/>
                            </a>
                            <div className="content">
                            <a className="author">Joe Henderson</a>
                            <div className="metadata">
                                <span className="date">5 days ago</span>
                            </div>
                            <div className="text">
                                Dude, this is awesome. Thanks so much
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                            </div>
                        </div>
                        <form className="ui reply form">
                            <div className="field">
                            <textarea></textarea>
                            </div>
                            <div className="ui blue labeled submit icon button">
                            <i className="icon edit"></i> Add Reply
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(Post))