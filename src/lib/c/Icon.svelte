<script>
  import feather from 'feather-icons'

  export let name
  export let color = undefined
  let options = color ? {color} : {}
</script>

{@html feather.icons[name].toSvg(options)}