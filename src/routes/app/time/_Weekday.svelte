<script>
  import { time, display_time } from '$lib/stores/time'
</script>
{#await time.get()}
Loading...
{:then}
{#if $display_time.weekday}
  {$display_time.weekday}
{/if}
{/await}