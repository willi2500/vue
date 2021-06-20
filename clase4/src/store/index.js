import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        langs: [
            {
                short_name: 'es',
                large_name: 'Español',
                dict: {
                    TEXT_LIST: { SALUDO: 'Hola!', DESPEDIDA: 'Adios' },
                    LANG_TEXT: 'Has seleccionado: ',
                    ACTION_BUTTON_TEXT: 'Mostrar en el idioma seleccionado',
                    ES_NAME: 'Español',
                    EN_NAME: 'Inglés',
                    FR_NAME: 'Frances'
                }
            },
            {
                short_name: 'en',
                large_name: 'English',
                dict: {
                    TEXT_LIST: { SALUDO: 'Hello', DESPEDIDA: 'Goodbye' },
                    LANG_TEXT: 'Selected: ',
                    ACTION_BUTTON_TEXT: 'Show text in selected language',
                    ES_NAME: 'Spanish',
                    EN_NAME: 'English',
                    FR_NAME: 'French'
                }
            },
            {
                short_name: 'fr',
                large_name: 'Français',
                dict: {
                    TEXT_LIST: { SALUDO: 'Salut', DESPEDIDA: 'adieu' },
                    LANG_TEXT: 'Choisi: ',
                    ACTION_BUTTON_TEXT: 'Afficher dans la langue sélectionnée',
                    ES_NAME: 'Espanol',
                    EN_NAME: 'Anglais',
                    FR_NAME: 'Français'
                }
            }
        ],
        current_lang: 'es',
        current_message: 'SALUDO'
    },
    getters: {
        shortNames: state => state.langs.map(item => item.short_name),
        currentLangDict: state =>
            state.langs.find(item => item.short_name == state.current_lang)
                .dict,
        currentLangName: state =>
            state.langs.find(item => item.short_name == state.current_lang)
                .large_name,
        resultText: state =>
            state.langs.find(item => item.short_name == state.current_lang).dict
                .TEXT_LIST[state.current_message]
    },
    mutations: {
        updateResult: (state, newResult) => {
            state.current_message = newResult;
        },
        updateLang: (state, newLang) => {
            state.current_lang = newLang
        }
    },
    actions: {},
    modules: {}
});
