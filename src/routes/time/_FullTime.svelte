<script>
  import TimeAdder from "./_TimeAdder.svelte";

  export let opts = [
    {txt: '1 Round', val: 6},
    {txt: '1 Minute', val: 60},
    {txt: '10 Minutes', val: 600},
    {txt: '1 Hour', val: 3600}
  ]
</script>


  {#each opts as opt}
  <TimeAdder {...opt} />
  {/each}
  <TimeAdder txt='Next Morning' val={0}/>