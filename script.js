
function editSearchText() {
    var searchText = document.getElementById("search-text");
    var userInput = prompt("Digite sua pergunta:", searchText.innerText);
    if (userInput !== null) {
      searchText.innerText = userInput;
    }
  }

  function hideImage() {
    var overlayText = document.querySelector(".overlay-text");
    var newImage = document.getElementById("noticia");
    var newText = document.querySelector(".new-text");
    var newTitle = document.getElementById("Titulo");
    var newButton = document.getElementById("Comment");
    var pHide = document.querySelector("#hide");
    var pHide2 = document.querySelector("#hide2");
    var pHide3 = document.querySelector("#hide3");
    var comment = document.querySelector("#comentario");
    var commentnput = document.querySelector("#hide4");
    var margin = document.querySelector("#margin");
    var img3 = document.querySelector("#img3");
    var img1 = document.querySelector("#img1");
    var img4 = document.querySelector("#img4");
    var img2 = document.querySelector("#img2");

    overlayText.style.display = "none";
    newImage.style.display = "none";
    newText.style.display = "block";
    newTitle.innerHTML = "Algumas fotos";
    newButton.innerHTML = "Ver os comentários";
    margin.style.marginTop = "-18vh";
    img3.style.display = "flex";
    img1.style.display = "none";
    img4.style.display = "flex";
    img2.style.display = "none";

    
    pHide.innerHTML = "Capa do álbum";
    pHide2.innerHTML = "Foto da cantora";
    pHide3.innerHTML = "";
    comment.innerHTML = "";
    hide4.innerHTML = `
      <h3>Comente sobre</h3>
      <input type="text" class="form-control" id="enem-comment" placeholder="Digite seu comentário aqui..." style="width: 40vw; margin-left: -4vw; margin-bottom: 3vh; margin-top: 2vh;">
      <button class="btn btn-primary" style="margin-left: -4vw">Postar Comentário</button>
  `;
  }

  function Enem () {
    var overlayText = document.querySelector(".overlay-text");
    var newImage = document.getElementById("noticia");
    var newText = document.querySelector(".new-text");
    var newTitle = document.getElementById("Titulo");
    var newButton = document.getElementById("Comment");
    var pHide = document.querySelector("#hide");
    var pHide2 = document.querySelector("#hide2");
    var pHide3 = document.querySelector("#hide3");
    var comment = document.querySelector("#comentario");
    var commentnput = document.querySelector("#hide4");
    var margin = document.querySelector("#margin");
    var img5 = document.querySelector("#img5");
    var img1 = document.querySelector("#img1");
    var img6 = document.querySelector("#img6");
    var img2 = document.querySelector("#img2");

    overlayText.style.display = "none";
    newImage.style.display = "none";
    newText.style.display = "block";
    newText.innerHTML = "A organização do 'Enem dos concursos' anunciou a divulgação dos locais de prova para os candidatos inscritos. Com essa informação, os participantes podem agora preparar-se adequadamente, verificando seus locais de prova e planejando o transporte e alojamento, se necessário. Para consultar o local de prova atribuído, os candidatos devem acessar o site oficial do 'Enem dos concursos'. É necessário ter em mãos o CPF e a senha cadastrada no momento da inscrição. Uma vez logados, os participantes poderão visualizar o cartão de confirmação, que inclui o endereço exato do local de prova, junto com a sala e outras informações relevantes. É altamente recomendável que os candidatos visitem o local de prova com antecedência para evitar contratempos no dia do exame. Além disso, é importante revisar as regras e procedimentos para o dia da prova, incluindo os itens permitidos e proibidos em sala, bem como os protocolos de segurança que podem estar em vigor. Este exame é uma oportunidade crucial para muitos que aspiram a posições no serviço público e outras áreas que utilizam o 'Enem dos concursos' como parte do processo de seleção. Portanto, uma preparação cuidadosa e uma logística bem planejada são essenciais para garantir que os candidatos possam realizar a prova com tranquilidade e segurança.";
    
    
    newTitle.innerHTML = "Algumas fotos";
    newButton.innerHTML = "Ver os comentários";
    margin.style.marginTop = "-18vh";
    img5.style.display = "flex";
    img1.style.display = "none";
    img6.style.display = "flex";
    img2.style.display = "none";

    
    pHide.innerHTML = "Foto do Enem";
    pHide2.innerHTML = "Foto de Estudante";
    pHide3.innerHTML = "";
    comment.innerHTML = "";
    hide4.innerHTML = `
      <h3>Comente sobre</h3>
      <input type="text" class="form-control" id="enem-comment" placeholder="Digite seu comentário aqui..." style="width: 40vw; margin-left: -4vw; margin-bottom: 3vh; margin-top: 2vh;">
      <button class="btn btn-primary" style="margin-left: -4vw">Postar Comentário</button>
  `;
  }

  function tiktok () {
    var overlayText = document.querySelector(".overlay-text");
    var newImage = document.getElementById("noticia");
    var newText = document.querySelector(".new-text");
    var newTitle = document.getElementById("Titulo");
    var newButton = document.getElementById("Comment");
    var pHide = document.querySelector("#hide");
    var pHide2 = document.querySelector("#hide2");
    var pHide3 = document.querySelector("#hide3");
    var comment = document.querySelector("#comentario");
    var commentnput = document.querySelector("#hide4");
    var margin = document.querySelector("#margin");
    var img1 = document.querySelector("#img1");
    var img7 = document.querySelector("#img7");
    var comentt = document.querySelector("#comentt");

    overlayText.style.display = "none";
    newImage.style.display = "none";
    newText.style.display = "block";
    newText.innerHTML = "O TikTok, uma das plataformas de mídia social mais populares do mundo, está enfrentando acusações de coleta de informações dos usuários. Essas alegações levantam sérias preocupações sobre a privacidade dos dados e o uso ético das informações pessoais dos usuários. A empresa foi criticada por sua prática de coletar uma ampla gama de dados pessoais, incluindo informações de localização, histórico de navegação e até mesmo dados biométricos, como reconhecimento facial. Essas revelações têm alimentado o debate sobre a transparência e a responsabilidade das empresas de tecnologia em relação ao tratamento dos dados dos usuários. Muitos estão questionando até que ponto o TikTok está protegendo a privacidade de seus usuários e se as práticas de coleta de dados da empresa estão em conformidade com as leis de proteção de dados em vigor. Diante dessas preocupações crescentes, os usuários estão sendo aconselhados a revisar suas configurações de privacidade no TikTok e considerar cuidadosamente as informações que compartilham na plataforma. Além disso, alguns estão optando por limitar seu uso da plataforma ou até mesmo excluir suas contas em resposta às preocupações com a privacidade. À medida que o debate sobre a privacidade dos dados continua a crescer, espera-se que o TikTok e outras plataformas de mídia social sejam cada vez mais pressionados a adotar políticas mais transparentes e proteger melhor as informações pessoais de seus usuários. A proteção da privacidade dos dados dos usuários é essencial para construir e manter a confiança nas plataformas de mídia social em um mundo cada vez mais digitalizado.";
    
    
    newTitle.innerHTML = "Algumas fotos";
    newButton.innerHTML = "Ver os comentários";
    margin.style.marginTop = "-1vh";
    img1.style.display = "none";
    img7.style.display = "flex";
    comentt.style.height = "6vh";
    
    
    pHide.innerHTML = "Foto de Segurança da Informação";
    pHide2.innerHTML = "Foto do TikTok";
    pHide3.innerHTML = "";
    comment.innerHTML = "";
    hide4.innerHTML = `
      <h3>Comente sobre</h3>
      <input type="text" class="form-control" id="enem-comment" placeholder="Digite seu comentário aqui..." style="width: 40vw; margin-left: -4vw; margin-bottom: 3vh; margin-top: 2vh;">
      <button class="btn btn-primary" style="margin-left: -4vw">Postar Comentário</button>
  `;

}

