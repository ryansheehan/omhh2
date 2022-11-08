<script>
  import "../app.postcss";
</script>

<div class="layout-wrapper">
  <slot />
</div>

<style lang="postcss">
  .layout-wrapper {
    block-size: 100%;
  }
</style>
