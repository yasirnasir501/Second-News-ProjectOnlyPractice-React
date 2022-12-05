import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class news extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Weather News - Top Headlines</h2>
        <div className='row'>
        <div className='col-md-4'>
        <NewsItem title='mytitle' description="MyDes"/>
        </div>
        <div className='col-md-4'>
        <NewsItem title='mytitle' description="MyDes"/>
        </div>
        <div className='col-md-4'>
        <NewsItem title='mytitle' description="MyDes"/>
        </div>
        </div>
      </div>
    )
  }
}

export default news
