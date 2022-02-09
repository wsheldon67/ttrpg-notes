<script>
  import { goto } from "$app/navigation";
  import { post } from "$lib/db/client";

  let username

  function submit(){
    // TODO make more robust for unallowed usernames, implement server side as well
    if (username === ''){return}
    post('/auth/register',username)
    .then((res) => {
      goto('/')
    })
  }
  // TODO notify/not allow when user already exists.
</script>
<form on:submit|preventDefault={submit}>
  <input placeholder='username' bind:value={username}/>
  <button type='submit'>Submit</button>
</form>