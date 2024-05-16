import { Heading } from "@chakra-ui/react";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipeListPage = ({
  // You can play around with the console log, but ultimately remove it once you are done
  searchField,
  filters,
  matchingRecipes,
  handleChange,
  handleClick,
  handleSearchClear,
  handleFilterChange,
  handleFilterClear,
}) => {
  return (
    <>
      <Heading
        pt={8}
        textAlign={"center"}
        textTransform={"uppercase"}
        textColor={"black"}
        fontSize={["5xl", null, "7xl", null, null, "8xl"]}
      >
        {"Winc Recipe Checker"}
      </Heading>

      <RecipeSearch
        searchField={searchField}
        filters={filters}
        matchingRecipes={matchingRecipes}
        handleChange={handleChange}
        handleClick={handleClick}
        handleSearchClear={handleSearchClear}
        handleFilterChange={handleFilterChange}
        handleFilterClear={handleFilterClear}
      />
    </>
  );
};
