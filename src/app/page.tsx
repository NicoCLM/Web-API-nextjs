async function getData() {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/"
  );
  return res.json();
}

export default async function Home() {
  // 👇🏽 grab the data array and other values as you would like inside the object
  const { results } = await getData();
  console.log(results);
  return (
    
    <div>
      ID: {results.id}
      <div className="grid gap-3 grid-cols-fluid">
        {results?.map((item: any) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
}