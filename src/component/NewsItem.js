import React, { Component } from 'react'

export default class NewsItem extends Component {

 
    render() {
        let {title,description,imageUrl,newsUrl}=this.props;
        return (
            <div>

                <div className="card" >
                <img src={imageUrl?imageUrl:"https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?cs=srgb&dl=pexels-nappy-936137.jpg&fm=jpg"} className="card-img-top" alt=" Business News Image " style={{height:"250px",width:"250px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
               
                
            </div>
        )
    }
}
