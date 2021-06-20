<template>
    <div id="app">
        <div>
        <lang-button v-for="name in $store.getters.shortNames" :key="name" :lang="name"/>
        </div>
        <lang-text />
        <message-list />
        <result-text />
    </div>
</template>

<script>
import LangButton from './components/LangButton.vue';
import LangText from './components/LangText.vue';
import MessageList from './components/MessageList.vue';
import ResultText from './components/ResultText.vue';
export default {
    components: {
        ResultText,
        MessageList,
        LangText,
        LangButton
    }
};
</script>

<style>
</style>