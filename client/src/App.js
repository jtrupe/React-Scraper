import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/index';
import Saved from './pages/saved';

import Navbar from './components/Navbar';

import API from './utilities/API'

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    API.findAllWhereUnsaved().then(responseArticles => {
      setArticles(responseArticles.data);
    })
  }, []);

  const handleScrape = () => {
    API.scrapeArticles().then(scrapedArticles => {
      API.findAllWhereUnsaved().then(unsavedArticles => {
        setArticles(unsavedArticles.data);
      })
    })
  }

  const handleSaveArticle = (articleId) => {
    API.saveArticle(articleId).then(savedArticle => {
      API.findAllWhereUnsaved().then(resultArticles => {
        setArticles(resultArticles.data);
      })
    })
  };

  return (
    <Router>
      <Navbar handleScrape={handleScrape} />
      <Switch>
        <Route exact path='/'>
          <Homepage
            articles={articles}
            handleSaveArticle={handleSaveArticle}
          />
        </Route>
        <Route exact path='/saved'>
          <Saved />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;