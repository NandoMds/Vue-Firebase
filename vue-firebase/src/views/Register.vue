<template>
    <div class="singup">
        <h1>Criar nova conta</h1>
        <input type="text" placeholder="Nome">
        <br>
        <input type="text" placeholder="Segundo Nome">
        <br>
        <input type="text" placeholder="Email">
        <br>
        <input type="password" placeholder="Senha">
        <br>
        <button type="submit">
            <a name="btn-registrar" id="br" class="btn btn-primary" href="/home" >Cadastrar</a>
        </button>
        <p>
            Bem vindo!
        </p>
    </div>
</template>

<script>
    export default {
        name: 'singup',
        data() {
            return{}
        },
    }
</script>