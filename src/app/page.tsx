"use server"
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { getCharacters, Character } from "@/model/character";


export default async function Home() {
  const data = await getCharacters();
  const dataArray = Array.from(data);
  return (
    <div className="container">

      <main>
        <h1 className={styles.welcomeTitle}>Bienvenido</h1>

        <ul className="grid-layout">
        {
          dataArray.map((character) => (
            <div className={styles.box}>
              <h1>{character.id}</h1>
            </div>
          ))
        }
          {/*JSON.stringify(data)*/}
        </ul>
      </main>
    </div>
  );

}
