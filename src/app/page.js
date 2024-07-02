"use client";
import { useState, useEffect } from "react";
import SSR from "../../pages/ssr-page";

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

  if (isLoading) return <p className="text-center mt-4">Loading...</p>;
  if (!data) return <p className="text-center mt-4">No joke available</p>;

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <p className="text-lg font-bold text-center mb-4">{data.value}</p>
          <p className="text-center text-gray-500">Chuck Norris Joke</p>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <SSR />
        </div>
      </div>
    </>
  );
}
