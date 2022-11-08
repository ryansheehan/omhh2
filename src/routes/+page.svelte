<script lang="ts">
    const test = import.meta.env['TEST'];
    const viteTest = import.meta.env['VITE_TEST'];
    const omhhTest = import.meta.env.OMHH_TEST;
</script>

<div class="main-container">
    <div class="headers">
        <h1>Oh My Heart and Home</h1>
        <h2>Recipes with Love</h2>
        <p>test = {test}</p>
        <p>viteTest = {viteTest}</p>
        <p>omhhTest = {omhhTest}</p>
    </div>
</div>

<style lang="postcss">
    .main-container {
        block-size: 100%;
        display: grid;
        place-items: center;
    }

    .headers {
        text-align: center;
    }
</style>
