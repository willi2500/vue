<template>
    <div>
        <select name="" id="" v-model="selectedItem">
            <option
                v-for="item in $store.getters.currentLangDict.TEXT_LIST"
                v-bind:key="item"
                v-bind:value="
                    Object.keys($store.getters.currentLangDict.TEXT_LIST).find(
                        (key) =>
                            $store.getters.currentLangDict.TEXT_LIST[key] ===
                            item
                    )
                "
            >
                {{ item }}
            </option>
        </select>
        <action-button v-bind:result="selectedItem"/>
    </div>
</template>

<script>
import ActionButton from './ActionButton.vue';
export default {
    components: { ActionButton },

    data() {
        return {

            selectedItem: String
        };
    },

};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>