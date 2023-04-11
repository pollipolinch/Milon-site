import { createI18n } from 'vue-i18n'
import ru from '../locales/ru.json'
import uz from '../locales/uz.json'
import {useLocaleStore} from "~/store/Locale";

export default defineNuxtPlugin(({ vueApp }) => {
    const store = useLocaleStore()
    const currentLocale = store.currentLocale
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: currentLocale.value,
        messages: {
            ru: ru,
            uz: uz
        }
    })

    vueApp.use(i18n)



})