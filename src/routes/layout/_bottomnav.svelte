<script>
  import {Nav, NavItem, Icon, Button, Styles} from 'sveltestrap'
</script>

<Styles />
<Nav class="fixed-bottom justify-content-start" dark color="dark">
  <NavItem class="ms-1">
    <Button><Icon name="alarm" /></Button>
  </NavItem>
  <NavItem class="ms-1">
    <Button><Icon name="map" /></Button>
  </NavItem>
  <NavItem class="ms-1">
    <Button><Icon name="book" /></Button>
  </NavItem>
</Nav>