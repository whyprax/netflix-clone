/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

const browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
};

export default browse;
