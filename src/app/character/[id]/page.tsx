

async function getCharacterById(charId: number){
    const response = await fetch(`https://rickandmortyapi.com/api/character/${charId}`, {
        method: "GET",
        next: {
            revalidate: 5000,
        },
    });
};


export default async function CharacterID({ params }: any) {
    const character = await getCharacterById(params.id);
    return (
        <main>
            <h1>{params.id}</h1>
            <p>{params.name}</p>
        </main>
    )
}