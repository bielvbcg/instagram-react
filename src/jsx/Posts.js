 export default function Posts(){
  const infoPosts = [
    {
      imagemUsuario: "assets/img/meowed.svg" ,
      nomeUsuario: "meowed",
      imagemPost: "assets/img/gato-telefone.svg",
      curtidasImagem: "assets/img/respondeai.svg",
      curtidasUsuario: "respondeai",
      curtidasNumero: "101.523",
    },
    {
      imagemUsuario: "assets/img/barked.svg",
      nomeUsuario: "barked",
      imagemPost: "assets/img/dog.svg",
      curtidasImagem: "assets/img/adorable_animals.svg",
      curtidasUsuario: "adorable_animals",
      curtidasNumero: "99.159",
    }
  ]

  return (
    <div class="posts">
      {infoPosts.map( info => {
        <Post 
          imagemUsuario={info.imagemUsuario}
          nomeUsuario={info.nomeUsuario}
          imagemPost={info.imagemPost}
          curtidasImagem={info.curtidasImagem}
          curtidasUsuario={info.curtidasUsuario}
          curtidasNumero={info.curtidasNumero}
        />
      })}
    </div>
  )
}

function Post(){
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={imagemUsuario} />
          {nomeUsuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={imagemPost} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={curtidasImagem} />
          <div class="texto">
            Curtido por <strong>{curtidasUsuario}</strong> e <strong>outras {curtidasNumero} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}