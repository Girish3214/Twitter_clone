import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../styles/newsItemStyles";
import { converter } from "../utils/convertioUtils/counterConverter";

const NewsItem = ({ news }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.newsFeed}>
        <div>
          <span>
            {news.tweetCategory} . {news.isTrending && "Trending"}
          </span>
        </div>
        <div>
          <div>
            <span className={classes.hashTags}>{news.hashTags}</span>
          </div>
        </div>
        <div>
          {news.tweets
            ? `${converter(news.tweets)} Tweets`
            : news.trendingWith
            ? news.trendingWith.map((trending, i) => (
                <Link
                  key={i}
                  to={`search?q=${trending.slice(1)}`}
                  style={{ marginRight: 2 }}
                  className={classes.linkItem}
                >
                  {trending}
                </Link>
              ))
            : " "}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
