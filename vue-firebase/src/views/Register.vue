<template>
    <div class="singup">
        <h1>Criar nova conta</h1>
        <form>
            <input type="text" name="username" v-model="username" placeholder="Username">
            <br>
            <input type="password" name="password" v-model="password" placeholder="Password">
            <br>
            <button type="button" @click="createUser(username, password)" class="btn btn-primary" value="Register">
                Register
            </button>
        </form> 
        <br>
        <p>
            Bem vindo!
            {{this.username}}
            {{this.password}}
        </p>
    </div>
</template>

<script>
import gql from 'graphql-tag'

    export default {
        name: 'Register',
        data() {
            return{
                id: null,
                username:'',
                password:''
            }
        },
        apollo: {
            users: gql `query {
                users {
                    id,
                    username,
                    password
                }
            }`,
        },
        methods: {
            createUser(username, password){
            console.log(`Create contact: ${username}`)
            this.$apollo.mutate({
                mutation: gql`mutation createUser($username: String!, $password: String!){
                createUser(username: $username, password: $password) {
                    id,
                    username,
                    password}
                    }`,
                    variables:{
                        username: username,
                        password: password,
                        }
                    }
                )
                location.reload();
            },
        }
    }
</script>