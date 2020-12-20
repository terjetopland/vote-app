<template>
    <h1>Odd Or Even</h1>
    <input @input="inputHandler" type="tel">
<p>{{msg}}</p>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

const isOdd = (showOdd: number) => {
    if (showOdd % 2 === 0){
        return false 
       }
       return true

};
export default class OddOrEven extends Vue {
    msg = "What kind of number is it?";
    inputHandler (e: Event) {
        const target = e.target as HTMLInputElement;
        const currentNumber = target.value;
        if (isOdd(parseInt(currentNumber))) {
            this.msg = "Odd";
        } else{
            this.msg = "Even";
        }
        
    }

    
}
</script >