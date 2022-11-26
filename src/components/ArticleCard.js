import { ThemeContext } from '../context/Theme.context';
import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const API_URL = "http://localhost:5005";

const ArticleCard = ({ oneArticle }) => {
  const { theme } = useContext(ThemeContext)

  const navigate = useNavigate();
  // get values from each article 
  const image = oneArticle.image.thumbnail.contentUrl;
  const { description, url, name } = oneArticle;

  const user = '63817089bfb9fcf273c76d1d';

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      image,
      url,
      name,
      description,
      user
    }
    console.log("body from client: ", requestBody)

    axios.post(`${API_URL}/api/articles`, requestBody)
      .then((response) => {
        navigate('/articles')
      })
      .catch((error) => {
        console.log('Error while sending request from client: ', error)
      });
  }



  return (
    <div className={"ArticleCard " + theme}>

      <img src={oneArticle.image.thumbnail.contentUrl} alt="oneArticle" />
      <a href={oneArticle.url} target="_blank" rel="noreferrer">
        <h3>{oneArticle.name}</h3>
      </a>
      <p >{oneArticle.description}</p>
      <button type="submit" onClick={handleSubmit} className={"save-btn " + theme}>Save</button>
    </div>
  );
}

export default ArticleCard;