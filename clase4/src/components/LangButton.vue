<template>
            <button @click="updateLang"> {{ lang.toUpperCase() }} </button>

</template>

<script>
export default {
    props:{
        lang: String
    },
    methods:{
        updateLang(){
            this.$store.commit('updateLang', this.lang)
        }
    }
}
</script>

<style>

</style>