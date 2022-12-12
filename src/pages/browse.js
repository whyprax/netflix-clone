/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useContent } from "../hooks";

const browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series, films);

  return <div>browse</div>;
};

export default browse;
