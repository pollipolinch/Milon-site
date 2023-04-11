import { ID_INJECTION_KEY } from "element-plus";
import  { useNuxtApp } from "nuxt/app";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
    const nuxtApp = useNuxtApp()
    const elementPlusPlugin = {};
    nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
        prefix: Math.floor(Math.random() * 10000),
        current: 0,
    });
});