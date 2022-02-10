<script>
  import { display_time } from '$lib/stores/time'
</script>
{#if $display_time.weekday}
  {$display_time.weekday}
{/if}