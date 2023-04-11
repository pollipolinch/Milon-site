import { defineStore } from "pinia";

export const useTagsStore = defineStore("tags", {
    state: () => ({
       tags:[{value:'Составить',id:1},{value:'Анализировать',id:2},{value:'Проверить',id:3}]
    }),
    actions: {},
});
