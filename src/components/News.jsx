import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
// import PropTypes from 'prop-types'


export class news extends Component {
      capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
      }


  constructor(props) {
    // console.log("Check Display Articles")
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      category: 'general',
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Weather News`
  }



 



  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e04084370984f07960a0c4dbf517362&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }


  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    
    this.setState({page: this.state.page - 1})
    this.updateNews();
  }

  handleNextClick = async () => {
    console.log("Next")

    this.setState({page: this.state.page + 1})
    this.updateNews();
   }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin:'35px 0px'}}>Weather News - Top {this.capitalizeFirstLetter(this.props.category)}</h2>
       {this.state.loading && <Spinner />};
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
               <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} 
               imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Pervious</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default news
