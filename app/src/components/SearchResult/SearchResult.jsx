import React from "react";
import styled from "styled-components";

const SearchResult = ({ data: foods}) => {
    return(
        <FoodCardContainer>
               <FoodCards> 
                {foods.map((food)=> (
               <FoodCard> </FoodCard>
            ))}
            </FoodCards>
      </FoodCardContainer>
    )
}

export default SearchResult;

const FoodCardContainer = styled.section`
  height: calc(160vh - 100vh); 
  background-image: url("/bg.png");
  background-size: cover;
  justify-content: center;
  `
const FoodCards = styled.section`
  
`;