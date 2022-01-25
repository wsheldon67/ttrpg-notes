<script>
  import { Card } from "sveltestrap";
  import TimeAdder from "./_TimeAdder.svelte";

  export let opts = [
    {txt: 'Rounds', val: 6},
    {txt: 'Minutes', val: 10}
  ]
</script>


  {#each opts as opt}
  <TimeAdder {...opt} />
  {/each}