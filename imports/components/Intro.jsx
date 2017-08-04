import React from 'react';

// import other component
import Comment from './Comment';
import Feature from './Feature';

export default class Intro extends React.Component {
    render() {
        return (
            // <div>
            //     <Comment />

            //     <div className="ui container section divider"></div>            
                
            //     <div className="intro">
            //         <div className="ui vertical stripe segment">
            //             <div className="ui middle aligned stackable grid container">
            //                 <div className="row">
            //                     <div className="eight wide column">
            //                         <h3 className="ui header">We Help Companies and Companions</h3>
            //                         <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
            //                         <h3 className="ui header">We Make Bananas That Can Dance</h3>
            //                         <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
            //                     </div>
            //                     <div className="six wide right floated column">
            //                         <img src="icons/1497280750_hex.png" className="ui large bordered rounded image"/>
            //                     </div>
            //                 </div>
            //                 <div className="row">
            //                     <div className="center aligned column">
            //                         <a className="ui huge button">Check Them Out</a>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>

            //     <div className="ui container section divider"></div>
                
            //     <Feature />
            // </div>
            <main className="introPage">
                <div className="section-1">
                    <div className="title">
                        <h1>Powerful publishing platform</h1>
                        <p>Students, parents. Poets, photographers. Scientists, activists. Millions of bloggers tell their stories on WordPress.com.</p>
                    </div>
                </div>
                <div className="section-2">
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
                <div className="section-3">
                    <div className="item">
                        <img src="/images/blog-write-2x.png" alt="Write for Your Blog"/>
                        <p>Multiple author support and custom user settings foster collaboration.</p>
                    </div>

                    <div className="item">
                        <img src="/images/blog-social-2x.png" alt="Write for Your Blog"/>
                        <p>Social features encourage rich interactions and help grow your audience.</p>
                    </div>

                    <div className="item">
                        <img src="/images/blog-mobile-2x.png" alt="Write for Your Blog"/>
                        <p>Mobile apps let you engage, publish, and view stats from anywhere.</p>
                    </div>

                    <div className="item">
                        <img src="/images/blog-support-2x.png" alt="Write for Your Blog"/>
                        <p>From community forums to individualized live-chat, 24/7 help is always here.</p>
                    </div>
                </div>
                <div className="section-4">
                    <div className="title">
                        <h1>Start telling your story</h1>
                        <p>Join millions of amazing bloggers today.</p>
                    </div>
                    <div className="link">
                         <a className="ui positive button">Create Blog</a>
                    </div>
                </div>
            </main>
        )
    }
}