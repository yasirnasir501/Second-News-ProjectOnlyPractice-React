import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class news extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "Can women's cricket be a money-spinner for India?",
      "description": "Indian women cricketers are hopeful that a recent decision on match fees could open more doors for them.",
      "url": "https://www.bbc.co.uk/news/av/world-asia-india-63712549",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DD08/production/_127748565_p0dj5vbf.jpg",
      "publishedAt": "2022-11-24T00:16:23Z",
      "content": "Cricket is India's most popular sport - but it still remains a male bastion in the country.\r\nSome recent decisions by administrators could change this, though, and open up more opportunities for aspi… [+495 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "World Cup 2022: How football fever is gripping cricket-crazy India",
      "description": "Fans are spending a fortune to travel to Doha to watch games and putting up cut-outs of players at home.",
      "url": "https://www.bbc.co.uk/news/world-asia-india-63645416",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7433/production/_127674792_mediaitem127674790.jpg",
      "publishedAt": "2022-11-19T01:11:13Z",
      "content": "This week, Hashir Ali and 11 of his friends will make a long trip - from Kozhikode city in the southern state of Kerala to Doha, the capital of Qatar. \r\nMr Ali, 55, a football-crazy civil engineer, a… [+5042 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Sri Lanka hands Karunaratne suspended ban after disciplinary inquiry - Reuters",
      "description": "Sri Lanka Cricket (SLC) on Wednesday handed bowling all-rounder Chamika Karunaratne a suspended one-year ban from all forms of cricket following a disciplinary inquiry into violations committed at the Twenty20 World Cup in Australia.",
      "url": "https://www.reuters.com/lifestyle/sports/sri-lanka-hands-karunaratne-suspended-ban-after-disciplinary-inquiry-2022-11-23/",
      "urlToImage": "https://www.reuters.com/resizer/GB_4DDwF3Fq1vG5wtrTJczRGVv4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/L5PJLUOX3FJD5EMZBPCY2RBQ6E.jpg",
      "publishedAt": "2022-11-23T14:06:00Z",
      "content": "Nov 23 (Reuters) - Sri Lanka Cricket (SLC) on Wednesday handed bowling all-rounder Chamika Karunaratne a suspended one-year ban from all forms of cricket following a disciplinary inquiry into violati… [+1417 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "England name Jon Lewis as women's team head coach - Reuters.com",
      "description": "England named Jon Lewis as the new head coach of their women's cricket team on Friday.",
      "url": "https://www.reuters.com/lifestyle/sports/england-name-jon-lewis-womens-team-head-coach-2022-11-18/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120",
      "publishedAt": "2022-11-18T16:43:00Z",
      "content": "Nov 18 (Reuters) - England named Jon Lewis as the new head coach of their women's cricket team on Friday.\r\nThe 47-year-old former England men's seamer will replace Lisa Keightley, who left the positi… [+506 chars]"
    }
  ]
  constructor() {
    super();
    console.log("Check Display Articles")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Weather News - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title.slice(0,39)} description={element.description.slice(0,44)} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}

        </div>
      </div>
    )
  }
}

export default news
