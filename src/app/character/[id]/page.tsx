import Link from "next/link";

async function getDataById(id: number) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return res.json();
}

export default async function CharacterID({ params }: any) {
  const { id, name, status, species, type, gender, image, origin, location } = await getDataById(params.id);
  return (
    <div className="charDetail">
      <h1 key={id}>{name}</h1>
      <img src={image} width={300} height={300} alt="profile" />
      <p>Estado: {status}</p>
      <p>Especie: {species}</p>
      <p>Tipo: {type}</p>
      <p>Genero: {gender}</p>
      <p>Origen: {origin.name}</p>
      <p>Ubicacion: {location.name}</p>
      <Link className="linkb" href={"/"}>Volver</Link>
    </div>
  );
}