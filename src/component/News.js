import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h1>this is newster</h1>
                This is news component
                <div className="row my-3 mx-4">
                    
                    <div className="col md-4 my-4">
                        <NewsItem title="This is title" description="i am the description" />
                    </div>

                    <div className="col md-4 my-4">
                        <NewsItem title="This is title" description="i am the description" />
                    </div>

                    <div className="col md-4 my-4">
                        <NewsItem title="This is title" description="i am the description" />
                    </div>

                    <div className="col md-4 my-4">
                        <NewsItem title="This is title" description="i am the description" />
                    </div>

                    <div className="col md-4 my-4">
                        <NewsItem title="This is title" description="i am the description" />
                    </div>
                   
                    <div className="col md-4 my-4">
                        <NewsItem title="This is title" description="i am the description" />
                    </div>
                    <div className="col md-4 my-4">
                        <NewsItem title="This is title" description="i am the description" />
                    </div>
                    <div className="col md-4 my-4">
                        <NewsItem title="This is title" description="i am the description" />
                    </div>
              
                </div>

              


                
            </div>
        )
    }
}
