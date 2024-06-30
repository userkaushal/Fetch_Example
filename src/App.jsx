import { useEffect, useState } from "react";
import Newdiv from "./Newdiv.jsx";
// import Card from './Card.jsx'
import "./App.css";

function App() {
  const [value, setvalue] = useState([]);

  const apiurl = "https://jsonplaceholder.typicode.com/posts";
  async function fetchdata() {
    try {
      const response = await fetch(apiurl);

      if (!response.ok) {
        throw new Error(`HTTP error!, status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data);
      setvalue(data);
      // console.log(value);
    } catch (error) {
      console.log("There was a problem with the Fetch function!", error);
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    // console.log(value);
  }, [value]);

  if (value.length === 0) {
    return <h1 className="text-center m-auto font-bold">Loading...</h1>;
  }

  return (
    <>
      <h1 className="min-h-20 flex p-14 m-4 justify-center text-3xl font-bold underline text-purple-500 border border-red-500">
        Fetching data from API and Displaying in Cards
      </h1>
      {/* <Card/> */}
      <div className="xl:w-11/12 sm:w-full lg:container mx-auto bg-slate-600 p-2 flex flex-row max-sm:flex-col">
      {/* <div className="container mx-auto p-4"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {value.map((item) => (
            <Newdiv key={item.id} data={item} />
            // console.log(item)
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
