<template>
  <body>
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
          A alergia à proteína do leite de vaca, conhecida como APLV, é a
          alergia alimentar mais comum durante a infância: estima-se que 2,2%
          das crianças são atingidas no primeiro ano de vida. Quem é alérgico ao
          leite de vaca pode apresentar desde sintomas bem leves, como uma
          urticária na pele, até reações bem graves, como o choque anafilático
          (reação alérgica súbita que pode ser fatal). Diante da suspeita de
          APLV, o bebê deve ser levado ao pediatra para que seja feito o
          diagnóstico correto e, caso confirmado, já se dê início ao
          tratamento.<br />
          <router-link to="/sobre"
            ><i class="bi bi-chevron-double-left"></i>

            Mais Informaçoes...<i class="bi bi-chevron-double-right"></i
          ></router-link>
        </p>
        <hr />
        <div class="obj container">
          <h2 class="col h3 text-right">Nosso Objetivo</h2>
          <h4 class="text-right">Ajudar....</h4>
          <p>
            O objetivo deste projeto é realizar um grupo de apoio a famílias de
            crianças que possuem diagnóstico de APLV: são famílias que
            necessitam de muita ajuda, pois além de se depararem com muitas
            dúvidas, o indivíduo que sofre com todos os males causados pela
            alergia é uma criança, o que deixa os responsáveis ainda mais
            angustiados. O foco principal será a realização de um banco de dados
            com responsáveis de crianças com APLV, para que haja o apoio às
            famílias, por meio de doações de fórmulas por empresas que tenham
            essa fórmula sobressalente e/ou outras pessoas que se sensibilizarem
            a fazer a doação.
          </p>
          <hr />
        </div>
      </div>

      <div class="container">
        <router-link to="/doar">
          <p class="qd text-center">
            <i class="bi bi-chevron-double-left"></i> Quero Doar
            <i class="bi bi-chevron-double-right"></i>
          </p>
        </router-link>

        <p class="h3 text-center">Doações</p>
        <router-link to="/cadastro">
          <div class="shadow row row-cols-1 row-cols-md">
            <div class="" v-for="(item, index) in donors" :key="index">
              <div class="">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <strong> Fórmula: </strong> {{ item.formula }}
                  </li>
                  <li class="list-group-item">
                    <strong> Bairro: </strong> {{ item.district }}
                  </li>
                  <li class="list-group-item">
                    <strong> Cidade: </strong> {{ item.city }}
                  </li>
                  <li class="list-group-item">
                    <strong> Quantidade: </strong> {{ item.quantity }}
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-three-dots"></i>
                  </li>
                </ul>
              </div>
            </div></div
        ></router-link>
      </div>
    </div>
  </body>
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
.obj {
  background: #f8f9fa;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
}

.qd {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 50px;
  padding: 30px;
}

h1 {
  font-size: 40px;
}

.h3 {
  margin-top: 30px;
  margin-bottom: 30px;
}

.bi-font {
  text-decoration: none;
  color: #212529;
  font-size: 20px;
}
.bi-font:hover {
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
    url(@/assets/images/aplv.jpg);
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 60px;
  margin-top: 60px;
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
  margin-top: 20px;
  margin-bottom: 20px;
}
.title {
  color: rgb(4, 10, 92);
}
.text {
  font-size: 18px;
}
a {
  text-decoration: none;
  color: rgb(18, 18, 19);
}
a:hover {
  text-decoration: none;
  color: #ff8800;
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
