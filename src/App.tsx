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

  return <img src={catImage} alt="Cat" />;
}

function CatFact() {
  const [fact, setFacts] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://cat-fact.herokuapp.com/facts");
      const data = await res.json();
      setFacts(data[1].text);
    }

    fetchData();
  }, []);
  console.log("hi");
  return <h1>{fact}</h1>;
}

export default App;
