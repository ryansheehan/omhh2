<script lang="ts" context="module">
    export type Color = 'red' | 'green' | 'yellow' | 'off';
    export enum State {
        Off = 0,
        Red = 1 << 0,
        Yellow = 1 << 1,        
        Green = 1 << 2,
    };
</script>

<script lang="ts">
    export let direction = 'column';
    export let size = '12';
    export let state: State = State.Off;
</script>

<div class="container" style="--direction:{direction}; --light-size: var(--size-{size});">
    <div class="light red off" class:on={state & State.Red} />
    <div class="light yellow off" class:on={state & State.Yellow} />
    <div class="light green off" class:on={state & State.Green} />
</div>

<style lang="postcss">
    .container {
        display: flex;
        flex-direction: var(--direction);
        gap: var(--size-2);
        width: fit-content;
        background-color: var(--surface2);
        padding: var(--size-2);       
        border-radius: var(--radius-4);
        border-width: var(--size-1);
        border-color: var(--gray-9);
        border-style: solid;
        isolation: isolate;
    }

    .light {
        --color-off: var(--gray-7);
        --glow-white: var(--gray-3);
        inline-size: var(--light-size);
        block-size: var(--light-size);        
        border-radius: var(--radius-round);        
    }

    .green {
        --color-on: var(--green-6); 
        --glow-left: var(--green-5);
        --glow-right: var(--green-7);       
    }

    .yellow {
        --color-on: var(--yellow-6); 
        --glow-left: var(--yellow-5);
        --glow-right: var(--yellow-7);       
    }

    .red {
        --color-on: var(--red-6);   
        --glow-left: var(--red-5);
        --glow-right: var(--red-7);     
    }

    .off {
        background-color: var(--color-off);
        transition: all 0.35s ease; 
    }

    .on {
        z-index: var(--layer-2);
        background-color: var(--color-on);
        box-shadow: 
            inset 0 0 50px var(--glow-white),      /* inner white */
            inset 20px 0 80px var(--glow-left),   /* inner left magenta short */
            inset -20px 0 80px var(--glow-right),  /* inner right cyan short */
            inset 20px 0 300px var(--glow-left),  /* inner left magenta broad */
            inset -20px 0 300px var(--glow-right), /* inner right cyan broad */
            0 0 50px var(--glow-white),            /* outer white */
            -10px 0 80px var(--glow-left),        /* outer left magenta */
            10px 0 80px var(--glow-right);         /* outer right cyan */

    }
</style>