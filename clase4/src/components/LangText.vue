<template>
    <div>
        {{
            $store.getters.currentLangDict.LANG_TEXT
        }}
        {{
            $store.getters.currentLangName
        }}
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>