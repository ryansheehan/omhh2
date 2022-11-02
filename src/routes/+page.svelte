<script lang="ts">
    import StopLight, { State } from '$lib/stoplight/stoplight.svelte';

    let state: State = State.Off; 
    
    function setState(s: State) {
        state ^= s;
    }
</script>

<div class="buttons">
    <button class="button" class:red={state & State.Red} on:click={() => setState(State.Red)}>Red</button>
    <button class="button" class:yellow={state & State.Yellow} on:click={() => setState(State.Yellow)}>Yellow</button>
    <button class="button" class:green={state & State.Green} on:click={() => setState(State.Green)}>Green</button>
</div>
<div class="stoplight-container">
    <StopLight {state} />
</div>

<style lang="postcss">
    .button {
        --color: var(--gray-6);
        --text-color: var(--gray-2);
    }

    .red {
        --color: var(--red-7);
        --text-color: var(--gray-1);
    }

    .yellow {
        --color: var(--yellow-5);
        --text-color: var(--gray-7);
    }

    .green {
        --color: var(--green-7);
        --text-color: var(--gray-1);
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: var(--size-2);
        padding-top: var(--size-6);
    }

    .buttons button {
        width: var(--size-10);
        height: var(--size-8);
        border-width: 0;
        border-radius: var(--radius-2);
        background-color: var(--color);
        color: var(--text-color);
        cursor: pointer;
        transition: all 0.3s;
    }

   .stoplight-container {
        display: flex;
        justify-content: center;
        padding-top: var(--size-6);
   }
</style>
