import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {



    constructor(){
        super();
        this.state={
            articles:[],
            loading:false
        }
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8508c10eba8b4e8e93fb8978ecbba7f8&page=1";
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles})

    }




    render() {
        return (
            <div className="container my-3">
                <h1>this is newster</h1>
                This is news component
                <div className="row my-3 mx-4">

                    {this.state.articles.map((element,id)=>{
                           return <div key={id} className="col md-4 my-4">
                           <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                       </div>
                    })}

                    <div className="container d-flex justify-content-between">
                    <button type="button" class="btn btn-dark">Previous</button>
                    <button type="button" class="btn btn-dark">Next</button>

                    </div>
                    
                 

               
                 
              
                </div>

              


                
            </div>
        )
    }
}
