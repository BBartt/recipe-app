import React, { useEffect, useState } from 'react';
import Recipes from './components/Recipes/Recipes';
import styles from './App.module.scss';

const App = () => {

  const APP_ID = '753112c7';
  const APP_KEY = '2e4a7a668d4218c37f55fbe65cc1f845';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  // const [search, setSearch] = useState("");
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  // const [query, setQuery] = useState("");
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className={styles.App}>

      <h1 className={styles.recipe__app}>recipe app</h1>
      <form onSubmit={getSearch} className={styles.search__form} >
        <input
          className={styles.search__bar}
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className={styles.search__button} type="submit">
          Search
        </button>
      </form>

      <div className={styles.recipes__wraper}>
        {recipes.length ? recipes.map(recipe => (
          <Recipes
            className={styles.recipe}
            {...recipe}
          />
        )) : (
          <p className={styles.recipes__loading}>Loading...</p>
        )}
      </div>

    </div>
  );
}

export default App;
