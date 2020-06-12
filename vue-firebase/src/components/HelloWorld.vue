<template>
  <div class="hello">
    <h1>Bem Vindo!</h1>
    <p>
      Este é nosso primeiro projeto em Vue.Js!
    </p>
    <h3>Faça o login ou cadastre-se gratuitamente!</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
