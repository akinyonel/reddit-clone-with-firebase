<template>
  <div class="home">

 <a class="button is-danger" @click="login()">Login With Google</a>
  <a class="button is-danger" @click="logout()">Logout</a>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'home',
  methods  : mapActions('auth',['login', 'logout']),

};
</script>
