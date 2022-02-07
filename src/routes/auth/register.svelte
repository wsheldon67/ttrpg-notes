<script>
  import { goto } from "$app/navigation";
  import { find } from "$lib/_db";

  let username

  function submit(){
    // TODO make more robust for unallowed usernames, implement server side as well
    if (username === ''){return}
    find('/auth/register',username)
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