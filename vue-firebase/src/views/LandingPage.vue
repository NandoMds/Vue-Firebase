<template>
  <div class="LandingPage">
    <h1>Bem Vindo!</h1>
    <p>
      Este é nosso primeiro projeto em Vue.Js!
    </p>
    <table border='1' width='100%' style='border-collapse: collapse;'>
        <tr>
            <th> ID </th>
            <th> Username </th>
            <th> Password </th>
            <th> Action </th>
        </tr>
        <tr v-for='user in users' v-bind:key="user.id">
            <td> {{ user.id }} </td>
            <td> {{ user.username }} </td>
            <td> {{ user.password}} </td>
            <td>
            <input type="button" @click="deleteUser(user.id)" class="btn btn-primary" value="Delete">
            </td>
        </tr>
        </table>

  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'LandingPage',

  data(){
        return{
            id:'',
            username: '',
            password: ''
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
    methods:{
      deleteUser(id){
        console.log(`Delete user: # ${id}`)
        this.$apollo.mutate({
          mutation: gql`mutation deleteUser($id: ID!){
            deleteUser(id: $id)
          }`,
          variables:{
            id: id,
          }
        })
        location.reload();
      },
    }
}
</script>
