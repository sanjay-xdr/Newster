import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

    static defaultProps = {
        country:"in",
        category:"general"
    }
    capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }



    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0

          
            
            
        } 
        document.title=`${this.capitalizeFirstLetter(this.props.category)}-News`;
    }

    

    async componentDidMount(){
        this.props.setProgress(10)
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8508c10eba8b4e8e93fb8978ecbba7f8&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        this.props.setProgress(30)
        let parsedData=await data.json();
        this.props.setProgress(70)
        this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults,loading:false})
        this.props.setProgress(100)

    }

    // handlePreviousClick=async ()=>{

       
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8508c10eba8b4e8e93fb8978ecbba7f8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true})
    //     let data=await fetch(url);
    //     let parsedData=await data.json();
    //     this.setState({articles: parsedData.articles,loading:false})

    //     this.setState({page:this.state.page-1, articles: parsedData.articles})
    //     console.log("Prev")

    // }

    // handleNextClick= async ()=>{
       
    //     if (!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    //         console.log("next")
    //         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8508c10eba8b4e8e93fb8978ecbba7f8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true})
    //     let data=await fetch(url);
    //     let parsedData=await data.json();
        

    //     this.setState({page:this.state.page+1,
    //         articles: parsedData.articles,
    //         loading:false

    //     })
    // }
        
    // }

    fetchMoreData = async () => {
        this.setState({page:this.state.page+1})
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: this.state.articles.concat(parsedData.articles), totalResults:parsedData.totalResults,loading:false})

  
      };




    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">{this.capitalizeFirstLetter(this.props.category)}</h1>
                Top Headlines
                {/* {this.state.loading && <Spin/>} */}
                
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length!==this.state.totalResults}
                loader={<Spin/>}
                >
                        <div className="row my-3 mx-4">

                                {this.state.articles.map((element,id)=>{
                                        return <div key={id} className="col md-4 my-4">
                                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                                    </div>
                                    })}
                        </div>
                </InfiniteScroll>
        
                    

              


                
            </div>
        )
    }
}
