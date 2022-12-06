import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class news extends Component {
  
  constructor() {
    // console.log("Check Display Articles")
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9e04084370984f07960a0c4dbf517362&page=1pageSize=20"
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick = async () =>{
    console.log("Prev")
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9e04084370984f07960a0c4dbf517362&page=${this.state.page - 1}&pageSize="20"`;
    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async () =>{
    console.log("Next")

    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{

      
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9e04084370984f07960a0c4dbf517362&page=${this.state.page + 1} &pageSize="20"`;
      let data = await fetch(url);
      let parsedData = await data.json()
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
    }
    render() {
      return (
        <div className='container my-3'>
        <h2>Weather News - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
          <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Pervious</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default news
