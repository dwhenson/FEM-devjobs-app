"use client";
import React from "react";
import Search from "@/components/Search";
import Results from "@/components/Results";
import { data } from "@/data/data";

function App() {
  const [position, setPosition] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [fullTimeOnly, setFullTimeOnly] = React.useState(false);
  const [results, setResults] = React.useState(data);

  function updateResults() {
    let nextResults = data
      .filter((job, index) =>
        position
          ? job.position.toLowerCase().includes(position.toLowerCase())
          : data[index],
      )
      .filter((job, index) =>
        location
          ? job.location.toLowerCase().includes(location.toLowerCase())
          : data[index],
      )
      .filter((job, index) =>
        fullTimeOnly ? job.contract === "Full Time" : data[index],
      );

    setResults(nextResults);
  }

  return (
    <main className="place-content" style={{ "--max": "1000px" }}>
      <Search
        position={position}
        setPosition={setPosition}
        location={location}
        setLocation={setLocation}
        fullTimeOnly={fullTimeOnly}
        setFullTimeOnly={setFullTimeOnly}
        updateResults={updateResults}
      />
      <Results results={results} />
    </main>
  );
}

export default App;
