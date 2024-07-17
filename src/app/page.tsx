import Header from "@/components/Header";

async function getData() {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/"
  );
  return res.json();
}

export default async function Home() {
  const { results } = await getData();
  console.log(typeof(results))
  console.log(results);
  return (
    <div>
      <Header />
      <div className="grid">
        {results?.map((item: any) => (
          <>
            <img src={item.image} width={300} height={300} alt="profile" />
            <p key={item.id}> {item.name}</p>
          </>
        ))}
      </div>
    </div>
  );
}