import { defineStore } from "pinia";
import axios from "axios";
import Donees from "../models/Donee";

export const useDoneeStore = defineStore({
  id: "donees",
  state: () => {
    return {
      donee: new Donees(),
      donees: [],
    };
  },
  actions: {
    getData() {
      axios.get(`/donee/`).then((response) => {
        this.donees = response.data;
      });
    },

    storeData(post) {
      axios.post(`/donee/`, post).then((response) => {
        this.donee = response.data;
      });
    },
  },
});
