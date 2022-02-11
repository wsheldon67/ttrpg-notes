<script>
  import { post } from "$lib/db/client";

  let note
  function keydown(e){
    if (e.key !== 'Enter'){return}
    post('/app/notes/create', {body: note, type: 'quick'})
    .then(() => note = '')
  }
</script>
<textarea on:keydown={keydown} bind:value={note}></textarea>