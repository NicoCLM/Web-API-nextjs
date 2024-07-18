"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

async function getData(page: number) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return res.json();
}


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getData(currentPage).then((data) => setResults(data.results));
  }, [currentPage]);

  return (
    <div>
      {results.map((item: any) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <Link href={`/character/${item.id}`}>
          <img src={item.image} alt={item.name} />
          </Link>
        </div>
      ))}
      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}