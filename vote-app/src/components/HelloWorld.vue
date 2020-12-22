<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      On this site you can create your own votingchalllenges for you and your friends, family or colleagues.<br>
      Get started with your own votes.
      <!--<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.-->
    </p>
    <button  @click="getStartedHandler">Get started now!</button>
    <!-- Jeg vil at knappen skal ha en større størrelse, men får det ikke til... -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import router from '@/router/index'

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string;
  getStartedHandler() {
    router.push( { name: 'Theme'})
    console.log("doesItWork")
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
  color: #19b333;
}
</style>
