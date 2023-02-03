import { useState } from "react";

export const AddCategory = ({ onNewCategory, cantValue }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueCant, setInputValueCant] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onInputChangeCant = ({ target }) => {
    setInputValueCant(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const inputTrimed = inputValue.trim();
    if (inputTrimed.length <= 1) return;
    onNewCategory(inputTrimed);
    cantValue(inputValueCant);
    // setCategories(categories => [...categories, inputValue])
    setInputValue("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={"Buscar gif"}
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={"Cantidad de gifs"}
          value={inputValueCant}
          onChange={onInputChangeCant}
        />
      </form>
    </div>
  );
};
