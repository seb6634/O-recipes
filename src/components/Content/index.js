import React from 'react';
import PropTypes from 'prop-types';
import { getTitleByRecipeNumber } from 'src/selectors';

import Card from 'src/components/Card';

import './style.scss';

const Content = ({ title, text, recipes }) => (
  <section className="content">
    <h1 className="content-title">{title || (recipes && getTitleByRecipeNumber(recipes.length))}</h1>
    <p className="content-text">{text}</p>
    {recipes && (
      <div className="content-list">
        {recipes.map((recipe) => (
          <Card key={recipe.id} {...recipe} />
        ))}
      </div>
    )}
  </section>
);

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Content.defaultProps = {
  title: null,
  recipes: null,
};

export default Content;
