<script lang="ts">
    import type {Author} from '$lib/cms/query/author';
    import Image from '$lib/components/image.svelte';  
    import { PortableText } from '@portabletext/svelte';

    export let author: Author;
    
</script>

<div class="author">    
    <div class="author-image">
        <Image image={author.image} alt={author.name} />
    </div>
    <h3>{author.name}</h3>
    <PortableText value={author.bio} />
</div>

<style lang="postcss">
    .author {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .author-image {                    
        max-inline-size: 200px;
        border-radius: var(--radius-round);
        overflow: hidden;
    }    
</style>