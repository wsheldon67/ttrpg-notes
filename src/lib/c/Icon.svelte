<script>
  import feather from 'feather-icons'

  export let name
  export let color = 'white'
</script>

{@html feather.icons[name].toSvg({color})}