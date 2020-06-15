<template>
    <div id="initiallayout">
        <div id="nav">
            <router-link to="/">Home</router-link> | 
            <router-link to="/about">About</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/register">Register</router-link> |
            <router-link to="/funil">Funil</router-link> |
            <router-link to="/swipe-card">Swipe Card </router-link> |
        </div>
        <router-view/>
  </div>
</template>

<script>
export default {
    name:'InitialLayout',
}
</script>

<style>

</style>