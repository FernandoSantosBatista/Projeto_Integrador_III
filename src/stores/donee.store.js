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

    storeData() {
      axios.post(`/donee/`, this.donee).then((response) => {
        response.data;
      });
    },
  },
});
