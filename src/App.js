import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [score, setScore] = useState(0);
  // const [message] = useState("Welcome");

  // useEffect(() => {
  //   console.log("call useEffect");
  //   document.title = `${message} Your score is ${score}`;
  // }, [score, message]);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("cats");

  const performSearch = (value) => setQuery(value);

  useEffect(() => {
    axios(
      `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=X7c9LOgdihMSNwPfpshrNOX2qogwAGGx`
    )
      .then((response) => setData(response.data.data))
      .catch((error) => console.log("Error fetching and parsing data", error));
  }, [query]);
  // useEffect(() => {
  //   console.log("useEffect called!");
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message))
  //     .catch((err) => console.log("Oh noes", err));
  // }, []);
  return (
    // <div className="App">
    //   <h1>{message}</h1>
    //   <h2>{score}</h2>
    //   <button onClick={() => setScore(score - 1)}>Descrease score</button>
    //   <button onClick={() => setScore(score + 1)}>Inscrease score</button>
    //   <button onClick={() => setScore(0)}>Reset score</button>
    //   <hr /> */}
    //   <img src={data} alt="A random dog breed" />
    // </div>
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        <GifList data={data} />
      </div>
    </>
  );
}

export default App;
