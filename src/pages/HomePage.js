import React from "react";
import useStyles from "../styles/pageStyles/homePageStyles";
import HomeHeader from "../components/HomeHeader";
import HomeAddTweet from "../components/HomeAddTweet";

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <HomeHeader />
      <HomeAddTweet />
    </>
  );
};

export default HomePage;
