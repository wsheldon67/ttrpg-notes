<script>
  import {Nav, NavItem, Icon, Button, Styles, Tooltip} from 'sveltestrap'
  import IconButton from '$lib/IconButton.svelte'
</script>

<Styles />
<Nav class="fixed-bottom justify-content-start" dark color="dark">
  <NavItem class="ms-1">
    <IconButton name="alarm" id="time" tip="Adjust game time" />
  </NavItem>
  <NavItem class="ms-1">
    <IconButton name="pen" id="note" tip="Take a note" />
  </NavItem>
  <NavItem class="ms-1">
    <IconButton name="book" id="compendium" tip="Look up rules" />
  </NavItem>
</Nav>