import { useState, useEffect } from 'react'
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import { ThemeContext } from '../context/Theme.context'
import { useContext } from 'react';

const ArticleListPage = () => {

  const [articles, setArticles] = useState([]);
  const { theme } = useContext(ThemeContext);


  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: { safeSearch: 'Off', textFormat: 'Raw' },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'd16af6ea87msh6df8da01907ff5bp1b1a28jsn8fbe0a8548ec',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };



  const getAllArticles = () => {

    axios.request(options)
      .then((response) => {

        console.log("response from API: ", response)
        setArticles(response.data.value)
      })
      .catch((error) => {
        console.log('Error while fetching data: ', error)
      })
  }


  useEffect(() => {
    getAllArticles();
  }, [])


  return (

    <div className={'ArticleListPage ' + theme}>

      {articles.map((article, index) => {
        return (
          <ArticleCard key={index} oneArticle={article} />
        )
      })}

    </div>
  )

}

export default ArticleListPage;