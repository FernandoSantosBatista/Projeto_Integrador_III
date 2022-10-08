<template>
  <div class="form container">
    <div class="row">
      <div class="text-center">
        <h1 class="titulo">Área de Cadastros</h1>
        <p>Cadastre-se para receber doação</p>
      </div>
    </div>
  </div>
  <div class="container col-md-12 col-lg-8 col-xl-6">
    <hr />
    <div class="mb-3">
      <label for="title" class="form-label">Nome</label>
      <input
        type="text"
        v-model="donee.name"
        class="form-control"
        autocomplete="off"
        id="name"
      />
    </div>

    <div class="mb-3">
      <label for="title" class="form-label">Bairro</label>
      <input
        type="text"
        v-model="donee.district"
        class="form-control"
        autocomplete="off"
        id="district"
      />
    </div>

    <div class="mb-3">
      <label for="city" class="form-label">Cidade</label>
      <input
        type="text"
        v-model="donee.city"
        class="form-control"
        autocomplete="off"
        id="city"
      />
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        v-model="donee.email"
        class="form-control"
        autocomplete="off"
        id="email"
      />
    </div>

    <div class="d-md-flex justify-content-md-end">
      <button @click="store" class="btn btn-outline-primary btn-lg px-5">
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useDoneeStore } from "../stores/donee.store";

export default {
  name: "DoneeView",
  computed: {
    ...mapState(useDoneeStore, ["donee", "donees"]),
  },
  methods: {
    ...mapActions(useDoneeStore, ["getData", "storeData"]),
    store() {
      this.storeData(
        (this.donee.id = this.donee.name
          .replaceAll(" ", "-")
          .toLowerCase())
      );
      this.$swal({
        icon: "success",
        title: "Cadastro efetuado com sucesso",
        confirmButtonColor: "#FF8800",
        animate: true,
      })
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
</style>
