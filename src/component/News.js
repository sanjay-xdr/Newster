import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';

export default class News extends Component {

    static defaultProps = {
        country:"in",
        category:"general"
    }



    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1,
            
            
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8508c10eba8b4e8e93fb8978ecbba7f8&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults,loading:false})

    }

    handlePreviousClick=async ()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8508c10eba8b4e8e93fb8978ecbba7f8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles,loading:false})

        this.setState({page:this.state.page-1, articles: parsedData.articles})
        console.log("Prev")

    }

    handleNextClick= async ()=>{
       
        if (!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
            console.log("next")
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8508c10eba8b4e8e93fb8978ecbba7f8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
        

        this.setState({page:this.state.page+1,
            articles: parsedData.articles,
            loading:false

        })
    }
        
    }




    render() {
        return (
            <div className="container my-3">
                <h1>this is newster</h1>
                This is news component
                {this.state.loading && <Spin/>}
                <div className="row my-3 mx-4">

                   {!this.state.loading &&  this.state.articles.map((element,id)=>{
                           return <div key={id} className="col md-4 my-4">
                           <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                       </div>
                    })}

                    <div className="container d-flex justify-content-between">
                    <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick} >&larr; Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>

                    </div>
                    
                 

               
                 
              
                </div>

              


                
            </div>
        )
    }
}
