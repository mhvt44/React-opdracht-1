import { useState } from "react";
import { Wrap } from "@chakra-ui/react";

import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

import { data } from "./utils/data";
import {
  matchRecipesToSearch,
  matchRecipesToFilters,
} from "./utils/searchFunctions";

function App() {
  const recipes = data.hits.map((hit) => hit.recipe);
  const initialFilters = [
    { id: "vegan", value: "vegan", isSelected: false },
    { id: "vegetarian", value: "vegetarian", isSelected: false },
    { id: "pescatarian", value: "pescaterian", isSelected: false },
  ];

  const [searchField, setSearchField] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filters, setFilters] = useState(initialFilters);

  const filteredRecipes = matchRecipesToFilters(recipes, filters);

  const handleChange = (event) => setSearchField(event.target.value);

  const matchingRecipes = searchField
    ? matchRecipesToSearch(filteredRecipes, searchField, filters)
    : filteredRecipes;

  const handleSearchClear = () => {
    setSearchField("");
  };

  const handleFilterChange = (e) => {
    const newFilters = filters.map((filter) => {
      if (filter.id === e.target.id) {
        return { ...filter, isSelected: e.target.checked };
      } else {
        return filter;
      }
    });
    setFilters(newFilters);
  };
  const handleFilterClear = () => {
    setFilters(initialFilters);
  };

  return (
    <Wrap
      minH={"100vh"}
      w={"100%"}
      minW={"220px"}
      flexDir={"column"}
      justify={"center"}
      bg={"gray.50"}
      spacing={0}
      pb={14}
    >
      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          handleButtonClick={setSelectedRecipe}
        />
      ) : (
        <RecipeListPage
          recipes={recipes}
          searchField={searchField}
          filters={filters}
          matchingRecipes={matchingRecipes}
          handleClick={setSelectedRecipe}
          handleChange={handleChange}
          handleSearchClear={handleSearchClear}
          handleFilterChange={handleFilterChange}
          handleFilterClear={handleFilterClear}
        />
      )}
    </Wrap>
  );
}

export default App;
