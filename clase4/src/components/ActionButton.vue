<template>
          <button @click="updateSelect">{{$store.getters.currentLangDict.ACTION_BUTTON_TEXT}}</button>
</template>

<script>
export default {

    props: ['result'],
    methods: {
        updateSelect(){
            this.$store.commit('updateResult',this.result)}
    }
}
</script>

<style>

</style>