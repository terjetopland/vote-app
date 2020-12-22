<template>
  <div class="home">
    <img width="900" height="450" alt="Doors img." src="../pic/doorsHome.jpg">;

    <span id="createrOfPic" class="caption">
      Image by <a href="https://pixabay.com/users/qimono-1962238/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1767563">Arek Socha</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1767563">Pixabay</a>
    </span>;
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
