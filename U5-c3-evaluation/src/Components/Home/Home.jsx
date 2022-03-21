import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import { useState,useEffect } from "react";
import axios from "axios";
import styled from "styled-components"
export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [books,setBooks]=useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/books").then(({ data }) => {
      console.log(data);
      setBooks(data)
  })
},[])
  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
      {books.map((e) => {
          return <BookCard key={e.id} id={ e.id} imageUrl={e.imageUrl} title={e.title} price={e.price} />
        })}
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
      </Main>
    </div>
  );
};
