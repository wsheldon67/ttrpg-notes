<script>
  export let value
  
</script>

<style>
  input {
    width: 2.8em;
    border-right: none;
    border-left: none;
    padding-right: 0;
    padding-left: 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .four {
    width: 2.5em;
  }
  i {
    font-size: 1.5em;
    width: min-content;
    padding-left: 1em;
  }

</style>

<div class='row'>
  <i class='bi-clock'></i>
  <input type='number' class='four form-control' value={value.year} />
  <input type='number' class='form-control' value={value.month} />
</div>