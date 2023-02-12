import React, { createContext, useContext, useState } from "react";
import resources from "../.json/resources.json";
import themes from "../.json/themes.json";
import examples from "../.json/examples.json";
import tools from "../.json/tools.json";

const AppsarchContext = createContext();
export const SearchContext = ({ children }) => {
  const [searchKey, setSearchkey] = useState("");
  const [isTheme, setIsTheme] = useState(true);
  const [isResource, setIsResource] = useState(true);
  const [isExample, setIsExample] = useState(true);

  const state = {
    themes,
    examples,
    resources,
    tools,
    searchKey,
    setSearchkey,
    themes: isTheme ? themes : [],
    resources: isResource ? resources : [],
    examples: isExample ? examples : [],
    setIsExample,
    setIsResource,
    setIsTheme,
    isResource,
    isTheme,
  };
 
  return (
    <AppsarchContext.Provider value={state}>
      {children}
    </AppsarchContext.Provider>
  );
};
export const useSerachContext = () => {
  return useContext(AppsarchContext);
};
