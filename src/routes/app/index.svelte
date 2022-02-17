<script>
  import ObjectViewer from '$lib/c/ObjectViewer.svelte'
  let object = {
    regular: "Here's the text for regular.",
    long: `Dear god this text is so long why didn't anyone stop me from typing this much it's seriously insane and I don't know if I'll ever get back for it's root root root for the home team, if they don't win it's a shame for it's one two three strikes your out and the old obld andogamg.`,
    obj: {
      sub: "Sub thing 1",
      sub1: "sub thing 2",
      supersub: {
        supersub1: "supersubbb",
        supersub2: "superububububub"
      }
    }
  }
</script>
<ObjectViewer {object} />