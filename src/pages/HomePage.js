import React from "react";
// import useStyles from "../styles/pageStyles/homePageStyles";
import HomeHeader from "../components/HomeHeader";
import TweetsContainer from "../components/TweetsContainer";

const HomePage = () => {
  // const classes = useStyles();
  return (
    <>
      <HomeHeader />
      <TweetsContainer />
    </>
  );
};

export default HomePage;
