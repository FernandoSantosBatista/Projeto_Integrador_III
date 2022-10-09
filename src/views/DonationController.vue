<template>
    <div class="container-fluid">
      <div class="donation text-center">
        <h2><strong>Área de doação: Relação de Cadastrados</strong></h2>
        <p>
          Clique no cadastro mais próximo de sua residência para realizar a
          doação.
        </p>
      </div>

      <div class="container">
        
        
      </div>
      <div class="col-12 container">
        <h4 class="text-center" style="margin-bottom: 20px">
          Fórmulas disponiveis para doação. <br />
          Faça o cadastro clicando abaixo.
        </h4>

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

