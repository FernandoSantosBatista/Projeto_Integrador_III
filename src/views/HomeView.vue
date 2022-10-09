<template>
  <div class="container-fluid">
    <div class="hero-image">
      <div class="hero-text p3">
        <h1>Bem vindo ao Apoio a Criança</h1>
        <h3>
          Conheça mais sobre <br />
          APLV (Alergia a Proteina do Leite Vaca)
        </h3>
      </div>
    </div>
    <div class="container">
      <h2 class="h3 text-right">O que é APLV ??</h2>
      <p>
        A alergia à proteína do leite de vaca, conhecida como APLV, é a alergia
        alimentar mais comum durante a infância: estima-se que 2,2% das crianças
        são atingidas no primeiro ano de vida. Quem é alérgico ao leite de vaca
        pode apresentar desde sintomas bem leves, como uma urticária na pele,
        até reações bem graves, como o choque anafilático (reação alérgica
        súbita que pode ser fatal). Diante da suspeita de APLV, o bebê deve ser
        levado ao pediatra para que seja feito o diagnóstico correto e, caso
        confirmado, já se dê início ao tratamento.<br />
      </p>
      <router-link to="/sobre">
        <button class="btn btn-outline-primary">Saiba mais...</button>
      </router-link>
      <hr />

      <div class="obj container">
        <h2 class="col h3 text-right">Nosso Objetivo</h2>
        <h4 class="text-right">Ajudar....</h4>
        <p>
          O objetivo deste projeto é realizar um grupo de apoio a famílias de
          crianças que possuem diagnóstico de APLV: são famílias que necessitam
          de muita ajuda, pois além de se depararem com muitas dúvidas, o
          indivíduo que sofre com todos os males causados pela alergia é uma
          criança, o que deixa os responsáveis ainda mais angustiados. O foco
          principal será a realização de um banco de dados com responsáveis de
          crianças com APLV, para que haja o apoio às famílias, por meio de
          doações de fórmulas por empresas que tenham essa fórmula sobressalente
          e/ou outras pessoas que se sensibilizarem a fazer a doação.
        </p>
        <router-link to="/doacao">
          <button class="btn btn-outline-primary">Saiba mais...</button>
        </router-link>
        <hr />
      </div>
    </div>

    <div class="container">
      <div class="container col-8">
        <h4 class="text-right" style="margin-top: 60px">
          Aqui você pode fazer a doação de uma fórmula.
        </h4>
        <p>
          Sua doação ficara disponivel na nossa base de dados para que pessoas
          que necessitam possa encontra-la
        </p>
        <br />

        <router-link to="/doar">
          <p class="text-center">
            <button class="qd btn btn-outline-primary">Quero Doar</button>
          </p>
        </router-link>
      </div>
      <br />
      <hr />
      <div class="container col-10">
        <h2 class="col h3 text-right">
          Como conseguir gratuitamente fórmula especial para bebês com APLV
        </h2>

        <p>
          Hoje em dia é muito comum encontrar bebê com alergia a proteína do
          leite de vaca (APLV). Nesses casos é necessário que a criança faço o
          uso de fórmulas infantis especiais, que são bem caras. Algumas chegam
          a custar em torno de R$200,00 a lata, que não dura nem uma semana,
          dependendo da idade e necessidade do bebê. o governo tem um programa
          de distribuição gratuita dessas fórmulas, o que viabiliza seu uso para
          todos aqueles que delas necessitam.
        </p>
        <router-link to="/obter-de-graca-a-formula-para-criancas">
          <button class="btn btn-outline-primary ">Ver mais...</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useDonorStore } from "../stores/donor.store";
export default {
  name: "HomeView",

  computed: {
    ...mapState(useDonorStore, ["donors"]),
  },
  methods: {
    ...mapActions(useDonorStore, ["getData"]),
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500&display=swap");

.obj {
  background: #f8f9fa;
}

.lista {
  background-color: #6f7b7c;
}

p {
  font-family: "Josefin Sans", sans-serif;
}

.qd {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 30px;
}

h1 {
  font-size: 40px;
  font-family: "Josefin Sans", sans-serif;
}

.h3 {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "Josefin Sans", sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: none;
  color: #ff8800;
}

.btn-outline-primary {
  border-color: #ff8800;
  color: #c66300;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #ff8800;
  border-color: #c66300;
}

.hero-image {
  background-image: linear-gradient(
      rgba(46, 44, 44, 0.5),
      rgba(10, 10, 10, 0.5)
    ),
    url(@/assets/images/aplv2.jpg);
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 60px;
  margin-top: 60px;
  background-color: rgb(243, 243, 243);
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.container-fluid {
  padding-right: unset;
  padding-left: unset;
}
.container,
.container-lg,
.container-md,
.container-sm {
  max-width: 960px;
}
.title {
  color: rgb(4, 10, 92);
  font-family: "Josefin Sans", sans-serif;
}
.text {
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
}

.shadow {
  box-shadow: 3px 4px 2px rgb(0 5 0 / 80%);
  max-width: 600px;
  border: 0.5px solid #ddd;
  margin: auto;
  text-align: justify;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
}
.shadow:hover {
  border: 1.5px solid #ff8800;
}
.shadow a {
  text-decoration: none;
}
</style>
