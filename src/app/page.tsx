import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { getCharacters, Character } from "@/model/character";

export async function getCharacterData() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();
  console.log(data);
  return data;
}

export default async function Home() {
  const data = await getCharacters();
  const dataArray = Array.from(data);
  return (
    <div className="container">
      <head>
        <title>WebAPI</title>
      </head>

      {
        dataArray.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))
      }

      <main>
        <h1 className="title">Bienvenido</h1>

        <div className="grid-layout">
          {JSON.stringify(data)}
        </div>
      </main>
    </div>
  );

}
