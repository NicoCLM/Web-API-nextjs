import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { getCharacters, Character } from "@/model/character";


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
