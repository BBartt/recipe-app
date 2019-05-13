import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipes.module.scss';

const Recipes = ( props ) => {

  // console.log(props.recipe.image);
  const { image, label, ingredients, uri, shareAs } = props.recipe;
  const uriNumber = uri.slice( uri.lastIndexOf("_") + 1 );


  return(
    <div key={uriNumber} className={styles.recipe}>
      <h1>{label}</h1>
      <h4 className={styles.ingredients}>Amount of ingredients: {ingredients.length}</h4>
      <img src={image} alt={image} />
      <a
        className={styles.btn}
        href={shareAs}
      >
        See recipie
      </a>
    </div>
  );
}

Recipes.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Recipes.defaultProps = {
  label: 'name not found',
  image: 'image not found'
}


export default Recipes;
