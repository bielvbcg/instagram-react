export default function Sidebar(){
  const infoSugestoes = [
    {
      imagem: "assets/img/bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      imagem: "assets/img/chibirdart.svg",
      nome: "chibirdart",
      razao: "Segue você",
    },
    {
      imagem: "assets/img/razoesparaacreditar.svg",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      imagem: "assets/img/adorable_animals.svg",
      nome: "adorable_animals",
      razao: "Segue você",
    },
    {
      imagem: "assets/img/smallcutecats.svg",
      nome: "smallcutecats",
      razao: "Segue você",
    },
  ]

  return (
    <div class="sidebar">
      <Usuario 
        imagem="assets/img/catanacomics.svg"
        usuario="catanacomics"
        arroba="Catana"
     />

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        
        {infoSugestoes.map( info => (
            <Sugestao 
              imagem={info.imagem}
              nome={info.nome}
              razao={info.razao}
            />
          ))}

      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  )
}

function Usuario({imagem , usuario , arroba}){
  return (
    <div class="usuario">
      <img src={imagem} />
      <div class="texto">
        <strong>{usuario}</strong>
        {arroba}
      </div>
    </div>
  )
}

function Sugestao({imagem , nome , razao}){
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={imagem} />
        <div class="texto">
          <div class="nome">{nome}</div>
          <div class="razao">{razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}