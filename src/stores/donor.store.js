import { defineStore } from "pinia";
import axios from "axios";
import Donors from "../models/Donors";

export const useDonorStore = defineStore({
  id: "donors",
  state: () => {
    return {
      donor: new Donors(),
      donors: [],
    };
  },
  actions: {
    getData() {
      axios.get(`/donor/`).then((response) => {
        this.donors = response.data;
      });
    },

    storeData(post) {
      axios.post(`/donor/`, post).then((response) => {
        this.donor = response.data;
      });
    },
  },
});
