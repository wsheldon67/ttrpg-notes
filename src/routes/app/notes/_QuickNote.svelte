<script>
  import { post } from "$lib/db/client";
  import { role } from "$lib/permissions";

  let note
  function keydown(e){
    if (e.key !== 'Enter'){return}
    post('/app/notes/create', {body: note, type: 'quick', role: role()})
    .then(() => note = '')
  }
</script>
<textarea on:keydown={keydown} bind:value={note}></textarea>