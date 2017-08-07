import React from 'react';

// import other component
import Comment from './Comment';
import Feature from './Feature';

export default class Intro extends React.Component {
    render() {
        return (            
            <main className="introPage">
                <div className="section-1">
                    <div className="ui container">
                    <div className="title">
                        <h1>Powerful publishing platform</h1>
                        <p>Students, parents. Poets, photographers. Scientists, activists. Millions of bloggers tell their stories on WordPress.com.</p>
                    </div>
                    </div>
                </div>
                <div className="section-2">
                    <div className="ui container">
                    <div className="content">
                        <h1 className="title">A home for your brand</h1>
                        <h3 className="describe">Personal or professional</h3>
                        <p className="context">Select from hundreds of beautiful and customizable blog themes to give your blog a unique look.</p>
                        <h3 className="describe">Perfectly personalized</h3>
                        <p className="context">Change the layout, colors, and background of your blog, and add powerful widgets to engage with followers, fans, and friends.</p>
                    </div>
                    <div className="image">
                        <img src="/images/large-image-blog.jpg"/>
                    </div>
                    </div>
                </div>
                <div className="section-3">
                    <div className="ui container">
                    <div className="item">
                        <img src="/images/blog-write-2x.png" alt="Write for Your Blog"/>
                        <h2>Multiple author support and custom user settings foster collaboration.</h2>
                    </div>

                    <div className="item">
                        <img src="/images/blog-social-2x.png" alt="Write for Your Blog"/>
                        <h2>Social features encourage rich interactions and help grow your audience.</h2>
                    </div>

                    <div className="item">
                        <img src="/images/blog-mobile-2x.png" alt="Write for Your Blog"/>
                        <h2>Mobile apps let you engage, publish, and view stats from anywhere.</h2>
                    </div>

                    <div className="item">
                        <img src="/images/blog-support-2x.png" alt="Write for Your Blog"/>
                        <h2>From community forums to individualized live-chat, 24/7 help is always here.</h2>
                    </div>
                    </div>
                </div>
                <div className="section-4">
                    <div className="ui container">
                    <div className="title">
                        <h1>Start telling your story</h1>
                        <p>Join millions of amazing bloggers today.</p>
                    </div>
                    <div className="link">
                         <a className="ui positive button">Create Blog</a>
                    </div>
                    </div>
                </div>
            </main>
        )
    }
}