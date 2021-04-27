import React, { useState, useEffect } from 'react';

import Article from './Article';

const Reddit = () => {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit +".json").then(
      res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if (data != null)
            setArticles(data.data.children);
            console.log('reddit',articles);
        });
      }
    )
  }, [subreddit]);
  return (
    <div className="" style={{width: '100%', height: '200px', overflowY: 'scroll', overflowX: 'hidden'}}>
      <header>
        <input class="subreddit_input" onChange={e => setSubreddit(e.target.value)} value={subreddit} />
        <button>Save</button>
      </header>
      <div className="articles">
        {(articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''}
      </div>
    </div>
  );
}
export default Reddit;