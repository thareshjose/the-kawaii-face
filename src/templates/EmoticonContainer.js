import React from "react";
import Header from "../components/Header";
import Tags from "../components/Tags";
import Head from "../components/head";
import Emoticons from "./emoticons";

const EmoticonContainer = props => {
  console.log(props);
  const data = props.pathContext;
  console.log(data);
  let title =
    props.path.charAt(1).toUpperCase() +
    props.path.slice(2) +
    " Faces | The Kawaii Face";
  return (
    <>
      <Head title={title} />
      <Header />
      <Tags tags={data.tags} path={props.path} />
      <Emoticons data={data} />
    </>
  );
};

export default EmoticonContainer;
