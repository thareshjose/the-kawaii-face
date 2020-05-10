import React from "react";
import Head from "../components/head";
import Header from "../components/Header";
import Emoticons from "../templates/emoticons";
import * as data from "../data/data.json";
import "../styles/style.scss";
import Tags from "../components/Tags";

const Home = () => {
  const emoticons = data[0];
  let tags = [];
  data.forEach(x => tags.push(x.path));
  console.log(emoticons);
  console.log(tags);
  return (
    <>
      <Head title="The Kawaii Face" />
      <Header />
      <Tags tags={tags} />
      <Emoticons data={emoticons} />
    </>
  );
};

export default Home;
