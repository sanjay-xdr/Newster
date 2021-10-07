import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description}=this.props;
        return (
            <div>

                <div className="card" style={{ width:"18rem"}}>
                <img src="https://cbsnews1.cbsistatic.com/hub/i/r/2021/10/07/a7de9569-670e-4abc-a7a2-0d52dbdf58a0/thumbnail/1200x630/5d354c2820d8e17c4738f62f54c8a83a/1006-en-full-809472-640x360.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
                </div>
               
                
            </div>
        )
    }
}
