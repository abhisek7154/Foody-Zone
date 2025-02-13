import styled from "styled-components"
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult/SearchResult";

const BASE_URL = "http://localhost:9000/"

const App = () => {

  const [data, setData ] = useState(null)
  const [loding , setLoding] = useState(false)
  const [error , setError] = useState(null);



  useEffect(() => {

    const FetchFoodData = async () => {

      setLoding(true);
  
      try
      {
  
      const response = await fetch(BASE_URL)
  
      const json  = await response.json();
  
      setData(json);
  
      setLoding(false);
  
      }catch (error) {
  
      setError("Unable to fetch data");
  
      }
    };
    FetchFoodData()
  }, []);

  console.log(data);

  // const temp = 
  //   [
  //     {
  //         "name": "Boilded Egg",
  //         "price": 10,
  //         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //         "image": "/images/egg.png",
  //         "type": "breakfast"
  //     }
  // ];

  //check

  if(error) return <div>{error}</div>;
  if(loding) return <div>Loding....</div>;


  return( 
  <Container>
    <TopContainer>
      <div className ="logo">
        <img src="../public/Foody Zone.png" alt="food-logo" />
      </div>
      <div className = "Search">
        <input placeholder="Search Food" />
      </div>
    </TopContainer>
    <FilterContainer>
      <div>
        <Button> All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </div>
      </FilterContainer>
      <SearchResult />
  </Container>
  )
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

`;
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .Search
  input{
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 14px;
    padding: 0 10px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding-bottom: 40px;
`

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  background-color: red;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkred;
  }
`;
