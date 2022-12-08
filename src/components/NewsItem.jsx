import React, { Component } from 'react'

export class newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zindex:'1'}}>
              {source}
            </span>
          <img src={!imageUrl ? 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397187658/58f46a72c6d12e9708723f3df47e8014.jpg' : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknow" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">ReadMore</a>
          </div>
        </div>
      </div>
    )
  }
}

export default newsitem
