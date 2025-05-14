import Competicao from "./competicao.js";

let competicoes = JSON.parse(localStorage.getItem("competições")) || [];

let formCompeticao = document.getElementById("formulario_competicao");

formCompeticao.addEventListener("submit", (e) => {
  e.preventDefault();

  let competicao = new Competicao();

  competicao.setNome(document.getElementById("id_competicao").value);
  competicao.setData(document.getElementById("id_data").value);
  competicao.setModalidade(document.getElementById("id_modalidades").value);

  competicoes.push({
    nome: competicao.getNome(),
    data: competicao.getData(),
    modalidade: competicao.getModalidade(),
  });

  localStorage.setItem("nome", competicao.getNome());
  localStorage.setItem("data", competicao.getData());
  localStorage.setItem("modalidade", competicao.getModalidade());

  localStorage.setItem("competições", JSON.stringify(competicoes));
  formCompeticao.reset();
});

let resultado = document.getElementById("resultado_consulta_competicao");

function consulta() {
  resultado.innerHTML = "";

  competicoes.forEach((competicao) => {
    let item = document.createElement("li");
    let index = competicoes.indexOf(competicao);
    item.innerHTML = `<b>${competicao.nome}</b> - ${competicao.data} - ${competicao.modalidade} <br> <button class="editar" id="${index}">editar</button> <br>`;
    resultado.appendChild(item);
  });

  let botoesEditar = document.getElementsByClassName("editar");

  for (let botao of botoesEditar) {
    botao.addEventListener("click", edicao);
  }
}

let consultaBotao = document
  .getElementById("id_consulta_competicao")
  .addEventListener("click", consulta);

function edicao() {
  let caixa = document.getElementById("editar_competicao");

  caixa.showModal();

  let recadNome = document.getElementById("id_recad_competicao").value;
  let recadData = document.getElementById("id_recad_data").value;
  let recadModalidade = document.getElementById("id_recad_modalidades").value;

  if (recadNome != null) {
    competicoes[index].nome = recadNome;
  }

  if (recadData != null) {
    competicoes[index].data = recadData;
  }

  if (recadModalidade != null) {
    competicoes[index].modalidade = recadModalidade;
  }
}
