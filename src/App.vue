<template>
  <v-app>
    <v-container grid-list-md text-xs-center class="container">
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body{
  background-color: #CCD9CE;
}
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFF;  
  margin-top: 60px;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 30px;
}

</style>
