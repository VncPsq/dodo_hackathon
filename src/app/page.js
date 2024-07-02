"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  console.info(data);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <div className="bg-amber-400">
        <p>{data.value}</p>
        <h1>Bonjouvgrg</h1>
        <p>Lorem ipsum.</p>
      </div>
    </>
  );
}
