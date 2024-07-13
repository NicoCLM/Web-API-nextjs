//import styles from "../styles/Home.module.scss";

import { getCharacters } from "@/model/character";


export default async function Home() {
  const request = await getCharacters();
  const dataArray = Array.from(request)
  if(Array.isArray(dataArray))
  console.log(dataArray)
  return (
    <div>
        {
          dataArray.map((character) => (
            <div key={character.id}>
              <h1>{character.name}</h1>
            </div>
          ))
        }
    </div>
  );

}
