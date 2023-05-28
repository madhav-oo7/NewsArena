import { Container } from '@mui/material'
import React from 'react'
import NewsCard from './NewsCard'
import './NewsContent.css'

function NewsContent({ load, setLoad, news, newsResults}) {
  return (
    <Container maxWidth='md'>
       <div className='content'>
           {
             news.map((newsItem) => (
                 
                 <NewsCard newsItem={newsItem} key={newsItem.title} />

             ))
           }
           {
             load <= newsResults && (
              <>
                    <hr/>
           <button className='loadmore' onClick = {() => setLoad(load + 20)}>
            Load More
           </button>
              </>
             )
           }
       
       </div>
    </Container>
  )
}

export default NewsContent