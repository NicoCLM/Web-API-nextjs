"use client"

import Menu from "@/components/Header/Menu";
import Logo from "@/components/Header/Logo";

export default function Header(props: any){
    return (
        <header>
            <Menu {...props} />
            {props.children}
        </header>
    )
}