export interface locationChar{
    name: string;
    url: string;
}

export interface originChar{
    name: string;
    url: string
}

export interface Character {
    id:number;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:string;
    origin:originChar;
    location:locationChar;
    image:string;
    episode:string [];
    url:string;
    created:string;
};

export interface Location {
    id:number;
    name:string;
    type:string;
    dimension:string;
    residents:string[];
    url:string;
    created:string;
};

export interface Episode {
    id:number;
    name:string;
    air_date:string;
    episode:string;
    characters:string[];
    url:string;
    created:string;
};

export const getCharacters = async(): Promise<any[]> =>{
    const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    const data = await response.json();
    console.log(data);
    return data;
};
