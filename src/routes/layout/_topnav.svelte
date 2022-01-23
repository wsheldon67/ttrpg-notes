<script>
  import { Collapse, Navbar, NavbarBrand, NavbarToggler, Input, Form } from 'sveltestrap'
  import SiteNav from './_sitenav.svelte'

  let isOpen = false
  function toggle() {isOpen = !isOpen}
</script>

<Navbar color="dark" dark class="fixed-top">
  <NavbarToggler on:click={toggle} />
  <Form class="flex-grow-1 mx-1">
    <Input type="search" placeholder="search" />
  </Form>
  <NavbarBrand href="/" class="ms-2">Logo</NavbarBrand>
  <Collapse {isOpen} navbar>
    <SiteNav />
  </Collapse>
</Navbar>