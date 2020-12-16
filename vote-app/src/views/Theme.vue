<template>
    <h1>Theme</h1>
    <p>{{text}}</p>
    <input @input="itemInputHandler" type="text">
    <p>{{item.itemName}}</p>

</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { ThemeObject} from '@/models/themeObject'


export default class Theme extends Vue {
    text = "Type in your theme of...";
    themeList = [];
    item = new ThemeObject ("10", "Names or items will be listed below." );
    // for brukeren: en box der du skriver inn en 
   //... av objektene som skal stemmes over
   // scriptet: når det skrives inn, skal objektet oppdateres
   itemInputHandler = (e: Event) => {
       const target =  e.target as HTMLInputElement;
       console.log(target.value)
       this.item.itemName = target.value

       };
    
}
</script>