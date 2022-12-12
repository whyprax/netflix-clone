/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

const browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });
  console.log(slides);

  return <div>browse</div>;
};

export default browse;
