import React from 'react'
import './NewsCard.css'

function NewsCard({newsItem}) {
    console.log(newsItem)
  return (
    <div className='newsCard'>
        <img className='newsImage' src={newsItem.urlToImage ? newsItem.urlToImage : "https://hyderabadangels.in/wp-content/uploads/2019/11/dummy-logo.png"} />
        <div className='newsText'>
           <div>
              <span className='title'>{newsItem.title}</span> <br/>
              <span className='author'>
                <a href = {newsItem.url} target='blank'>
                  <b> Short </b>
                </a>
                <span className='muted'>
                  by {newsItem.author ? newsItem.author : "unknown"}
                  
                </span>
              </span>
           </div>
           <div className='lowerNews'>
               <div className='discription'>
                {newsItem.description}
               </div>
               <span className='readMore'>
                read more at {" "}
                <a href = {newsItem.url} target="blank">
                   <b>{newsItem.source.name}</b>
                </a>
               </span>
           </div>
        </div>
    </div>
  )
}

export default NewsCard