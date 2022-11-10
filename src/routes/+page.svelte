<script lang="ts">
    import {fetchAuthors} from '$lib/cms/query/author';
    import Author from '$lib/components/author.svelte';
</script>

<div class="main-container">
    <div class="headers">
        <h1>Oh My Heart and Home</h1>
        <h2>Recipes with Love</h2>
        {#await fetchAuthors('ryan-sheehan') then [author]}
            <Author {author} />
        {/await}
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
