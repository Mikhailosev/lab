<template>
    <div>
        <Header v-if="$route.name!=='login'"></Header>
        <router-view v-bind:key="$route.fullPath"></router-view>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
    name: "App",
    data() {
        return {
            login: false,
            name: "",
            role: ""
        };
    },
    components: {
        Header
    }
};
</script>

<style>
.red{
    border:4px solid red;
    margin: 0 auto;
     padding: 0px !important;
         height: 100%;
}
.yellow{
    border:4px solid yellow;
     margin: 0 auto;
     padding: 0px !important;
         height: 100%;
}
.green{
    border:4px solid green;
     margin: 0 auto;
     padding: 0px !important;
         height: 100%;
}
</style>
