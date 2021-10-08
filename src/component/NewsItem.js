import React, { Component } from 'react'

export default class NewsItem extends Component {

 
    render() {
        let {title,description,imageUrl,newsUrl,author,publishedAt,source}=this.props;
        const date = new Date(publishedAt);
        const date2=date.toGMTString();
        return (
            <div>

                <div className="card" >
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"40%",zIndex:1}}>{source}</span>
                <img src={imageUrl?imageUrl:"https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?cs=srgb&dl=pexels-nappy-936137.jpg&fm=jpg"} className="card-img-top" alt=" Business News" style={{height:"250px",width:"250px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"> <small className="text-muted">By {author?author:"Unknown"} {date2}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
               
                
            </div>
        )
    }
}
