<script lang="ts">
    import type {Author} from '$lib/cms/query/author';
    import { imageBuilder } from '$lib/cms/client';    

    export let author: Author;
    
</script>

<h2>{author.name}</h2>

<style lang="postcss">

</style>