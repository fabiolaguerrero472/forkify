import * as model from './model.js';

import recipeView from './views/RecipeView.js';
import searchView from './views/SearchView.js';
import resultsView from './views/ResultsView.js';
import paginationView from './views/PaginationView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();

    if (!query) {
      resultsView.renderError('No recipes found for your query');
      return;
    }

    await model.loadSearchResults(query);

    if (model.state.search.results.length === 0) {
      resultsView.renderError('No recipes found for your query');
      return;
    }

    resultsView.render(model.getSearchResultsPage());

    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
    resultsView.renderError();
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(
    model.getSearchResultsPage(goToPage)
  );

  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);

  searchView.addHandlerSearch(
    controlSearchResults
  );

  paginationView.addHandlerClick(
    controlPagination
  );
};

init();