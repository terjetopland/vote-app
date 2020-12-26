<template>
  <div class="home">
    <div class="item">
      <img alt="pictureOfDoor" src="../pic/doorsHome.jpg">
        <span class="caption"> Image by <a href="https://pixabay.com/users/qimono-1962238/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1767563">Arek Socha</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1767563">Pixabay</a>
        </span>
    </div>
    <!--vil flytte teksten til venstre side under bildet. se style lenger nede.-->
    <div class="header">
      <HelloWorld msg="Vote-app"/>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
div.item{
    vertical-align: top;
    display: inline-block;
    text-align: left;
    width: 600px;
}
img {
    width: 600px;
    height: 300px;
    background: black;
}
.caption {
    display: block; 
    text-align: bottom;
    font-size: 60%;
    background: rgb(221, 159, 87);
    width: 26%;
}
div.header{
    color: rgb(41, 83, 44);
}


</style>