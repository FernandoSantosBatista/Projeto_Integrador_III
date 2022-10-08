<template>
  <body>
    <div class="form container">
      <div class="row">
        <div class="text-center">
          <h1 class="titulo">Área de Cadastros</h1>
          <p>Cadastre-se para doar uma fórmula</p>
        </div>
      </div>
    </div>
    <div class="container col-md-12 col-lg-8 col-xl-6">
      <hr />
      <div class="mb-3">
        <label for="title" class="form-label">Nome</label>
        <input
          type="text"
          v-model="donor.name"
          class="form-control"
          autocomplete="off"
          id="name"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Bairro</label>
        <input
          type="text"
          v-model="donor.district"
          class="form-control"
          autocomplete="off"
          id="district"
        />
      </div>

      <div class="mb-3">
        <label for="city" class="form-label">Cidade</label>
        <input
          type="text"
          v-model="donor.city"
          class="form-control"
          autocomplete="off"
          id="city"
        />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          v-model="donor.email"
          class="form-control"
          autocomplete="off"
          id="email"
        />
      </div>

      <div class="mb-3">
        <label for="formula" class="form-label">Fórmula</label>
        <input
          type="text"
          v-model="donor.formula"
          class="form-control"
          autocomplete="off"
          id="formula"
        />
      </div>

      <div class="col-5 mb-3">
        <label for="quantity" class="form-label">Quantidade</label>
        <input
          type="number"
          v-model="donor.quantity"
          class="form-control"
          autocomplete="off"
          id="quantity"
        />
      </div>

      <div class="d-md-flex justify-content-md-end">
        <button @click="store" class="btn btn-outline-primary btn-lg px-5">
          Enviar
        </button>
      </div>
    </div>
  </body>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useDonorStore } from "../stores/donor.store";

export default {
  name: "DonorView",
  computed: {
    ...mapState(useDonorStore, ["donor", "donors"]),
  },
  methods: {
    ...mapActions(useDonorStore, ["getData", "storeData"]),
    store() {
      this.storeData();
      this.$swal({
        icon: "success",
        title: "Cadastro efetuado com sucesso",
        confirmButtonColor: "#FF8800",
        animate: true,
      });
      this.$router.push("/");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.form {
  margin-top: 80px;
}
h1{
  margin-top: 60px;
}

.form-control{
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
}
</style>
