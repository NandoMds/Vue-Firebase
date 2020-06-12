<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" placeholder="Email">
        <br>
        <input type="password" placeholder="Senha">
        <br>
        <button type="submit">
            <a name="" id="" class="btn btn-primary" href="/home" role="button">Login</a>
        </button>
        <p>
            Você não tem conta?
            <a href="/registrar">Crie uma conta</a>
        </p>
    </div>
</template>

<script>
export default {
  name: 'login',
  data() {
        return{}
  },
}
</script>

<style>

</style>