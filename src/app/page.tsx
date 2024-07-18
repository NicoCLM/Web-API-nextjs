"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

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
      <Header />
      <div>
        <h2>Lista de Personajes</h2>
      </div>
      <div className="buttons">
        <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
      <div className="grid">
        {results.map((item: any) => (
          <div className="columns" key={item.id}>
            <Link className="linkText" href={`/character/${item.id}`}>
              <img src={item.image} width="200" height="200" alt={item.name} />
              <p>{item.name} <br />{item.status} <br /><br />Ubicacion: <br />{item.location.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}