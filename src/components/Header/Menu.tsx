"use client"

export default function Menu(props: any){
    return (
        <div>
            {props.charactername}
            {props.age}
            {props.isAnime ? "Yes, is from an anime" : "No, it isnt"}
        </div>
    );


}