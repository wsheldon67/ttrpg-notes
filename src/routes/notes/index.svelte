<script>
  async function getNotes() {
    const res = await fetch(`/notes/all`,{method: 'POST'})
    console.log(res)
    const txt = await res.text()
    if (res.ok) {return txt}
    else {throw new Error(txt)}
  }
  let promise = getNotes()
</script>

{#await promise}
<p>loading...</p>
{:then result}
<p>{result}</p>
{:catch error}
<p>{error}</p>
{/await}