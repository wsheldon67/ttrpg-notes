<script>
  let username

  function submit() {

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