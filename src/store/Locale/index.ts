import { defineStore } from "pinia";
export const useLocaleStore = defineStore("locale", {
  state: () => ({
    locales: [
      { label: "🇺🇿", value: "uz" },
      { label: "🇷🇺", value: "ru" },
    ],
    currentLocale: { label: "🇺🇿", value: "ru" },
  }),
  actions: {
      setLocale(payload:any){
         localStorage.setItem('lang', JSON.stringify([payload]))
          const data = useNuxtApp()
          data.vueApp._context.config.globalProperties.$i18n.locale = payload.value
          this.currentLocale = payload;
          console.log(this.currentLocale)
      }
  },
  getters:{
     currentLocaleHandler:(state)=>{
      if (typeof window !== 'undefined' && localStorage.getItem('lang')) {
        let result= JSON.parse(localStorage.getItem('lang'))[0]
        const data = useNuxtApp()
        data.vueApp._context.config.globalProperties.$i18n.locale = result.value
        state.currentLocale = result
       return result
      }else{
        return state.currentLocale
      }
     }
  }
  
});
