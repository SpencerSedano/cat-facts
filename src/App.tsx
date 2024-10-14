import { useEffect, useState } from "react";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <CatFace />
      <CatFact />
    </>
  );
}

function Navbar() {
  return (
    <>
      <nav className="flex bg-black justify-center">
        <p className="text-white p-6">Cat Facts</p>
      </nav>
    </>
  );
}

function CatFace() {
  const [catImage, setCatImage] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
      setCatImage(data[0].url);
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-center w-screen h-96 p-6">
      <img src={catImage} alt="Cat" />
    </div>
  );
}

function CatFact() {
  const [fact, setFacts] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://cat-fact.herokuapp.com/facts");
      const data = await res.json();
      const randomNumber = Math.floor(Math.random() * data.length);
      console.log(randomNumber);
      setFacts(data[randomNumber].text);
    }

    fetchData();
  }, []);
  console.log("hi");
  return (
    <div>
      <h1 className="text-center">{fact}</h1>
    </div>
  );
}

export default App;
