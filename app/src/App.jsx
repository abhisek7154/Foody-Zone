import styled from "styled-components"
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000"

const App = () => {

  const [data, setData ] = useState(null)
  const [filteredData , setFilteredData] = useState(null)
  const [loding , setLoding] = useState(false)
  const [error , setError] = useState(null);
  const [selectedBtn , setSelectedBtn] = useState("all");



  useEffect(() => {

    const FetchFoodData = async () => {

      setLoding(true);
  
      try
      {
  
      const response = await fetch(BASE_URL)
  
      const json  = await response.json();
  
      setData(json);

      setFilteredData(json);
  
      setLoding(false);
  
      }catch (error) {
  
      setError("Unable to fetch data");
  
      }
    };
    FetchFoodData()
  }, []);

const searchFood = (e) => {
  const searchedValue = e.target.value;

  console.log(searchedValue);

  if(searchedValue == ""){
    setFilteredData(null);
  }

  const filter = data?.filter((food) => 
    food.name.toLowerCase().includes(searchedValue.toLowerCase())
  );

  setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
  };

  const filter = data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase())
  );

  setFilteredData(filter);
  setSelectedBtn(type);
  };


  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type:"lunch" ,
    },
    {
      name: "Dinner",
      type: "dinner",
    }
  ]
  //check

  if(error) return <div>{error}</div>;
  if(loding) return <div>Loding....</div>;


  return( 
    <>
      <Container>
    <TopContainer>
      <div className ="logo">
        <img src="../public/Foody Zone.png" alt="food-logo" />
      </div>
      <div className = "Search">
        <input onChange={searchFood} placeholder="Search Food" />
      </div>
    </TopContainer>
    <FilterContainer>
      {filterBtns.map((value) =>(        
        <Button key={value.name} onClick={() => filterFood(value.type)} >
          {value.name} 
        </Button>
      ))}
      </FilterContainer>
  </Container>
  <SearchResult data={filteredData}/>
    </>
  )
};

export default App;

export const Container = styled.div`
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
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding-bottom: 40px;
`

export const Button = styled.button`
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
