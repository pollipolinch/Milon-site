import { defineStore } from "pinia";

export const useContractsStore = defineStore("contracts", {
  state: () => ({
    contracts: [] as any,
    contract: {} as any,
    categories: [] as any
  }),
  actions: {
    async fetchContracts(payload:any) {
      try {
        await $fetch("http://159.89.190.205:3000/api/v1/contract", {
          body:payload,
          method: "GET",
        }).then((res) => {
          this.contracts = res;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchContract(payload:any) {
      try {
        await $fetch("http://159.89.190.205:3000/api/v1/contract/" + payload, {
          method: "GET",
        }).then((res) => {
          console.log(res)
          this.contract = res;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategories() {
      try {
        await $fetch("http://159.89.190.205:3000/api/v1/category", {
          method: "GET",
        }).then((res) => {
          this.categories = res;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
