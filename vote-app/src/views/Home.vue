<template>
  <div class="home">
    <div class="item">
      <img width="600" height="300" alt="pictureOfDoor" src="../pic/doorsHome.jpg">
        <p id="picDoor"> Image by <a href="https://pixabay.com/users/qimono-1962238/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1767563">Arek Socha</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1767563">Pixabay</a>
        </p>
    </div>
    <!--vil flytte teksten til venstre side under bildet-->

    <HelloWorld msg="Vote-app"/>
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
