import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  const [cant, setCant] = useState(5);

  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return;
    setCategories([onNewCategory, ...categories]);
  };
  

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} cantValue={(value) => setCant(value)}/>

      {categories.map((category) => (
        <GifGrid category={category} key={category} cantValue={cant}/>
      ))}
    </>
  );
};
