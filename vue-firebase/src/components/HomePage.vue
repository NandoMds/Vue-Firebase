<template>
  <div class="HomePage">
    <h1>Bem Vindo!</h1>
    <p>
      Este é nosso primeiro projeto em Vue.Js!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
