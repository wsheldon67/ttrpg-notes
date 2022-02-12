<script>
  import { goto } from '$app/navigation';
  import { post } from '$lib/db/client'

  let username

  function submit() {
    post('/auth/set', username)
    .then(() => {goto('./campaign')})
  }
  // TODO login
  // TODO create campaign
  // TODO select campaign
  // TODO store user/campaign in cookie, send w/ every req
</script>
<form on:submit|preventDefault={submit}>
  <input placeholder='username' bind:value={username} />
  <button type='submit'>Log In</button>
</form>