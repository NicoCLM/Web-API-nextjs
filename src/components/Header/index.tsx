"use client"

export default function Header() {
  return (
    <div>
      <header className="welcomeTitle">
        <h1>BIENVENIDO!</h1>
        <div className="searchbar">
          <p>Busca tu personaje favorito</p>
          <input placeholder="Buscar..." type="text" name="" id="" />
        </div>
      </header>
    </div>
  )
}