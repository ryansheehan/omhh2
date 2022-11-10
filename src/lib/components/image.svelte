<script lang="ts">
    import {imageBuilder} from '$lib/cms/client';
    import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

    export let image: SanityImageSource;
    export let alt: string;

    const src = imageBuilder.image(image).url();
</script>

<div class="image-wrapper">
    <img {src} {alt} />
</div>

<style lang="postcss">
    
</style>