<script lang="ts">
    import {fetchAuthors} from '$lib/cms/query/author';

    console.log('fetching authors');
    fetchAuthors('ryan-sheehan').then(data => console.log(data));
</script>

<div class="main-container">
    <div class="headers">
        <h1>Oh My Heart and Home</h1>
        <h2>Recipes with Love</h2>
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
