import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import axios from 'axios';
import NewsContent from './component/NewsContent';

function App() {
  const [category, setCategory] = useState("General");
  const [news, setNews] = useState([])
  const [newsResults, setNewsResults] = useState();
  const [load, setLoad] = useState(20);

  const newsApi = async () => {
    try {
      
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${load}`
        );
        setNews(news.data.articles);
        setNewsResults(news.data.totalResults);
 
    }

    catch (error){
      console.log(error)
    }
  }

  console.log(news);

  useEffect(()=> {
    newsApi();
  }, [newsResults, category, load])
  return (
    <div className="App">
       <Navbar setCategory={setCategory}/>
       <NewsContent  load={load} setLoad={setLoad} news={news} newsResults={newsResults}/>
    </div>
  );
}

export default App;
