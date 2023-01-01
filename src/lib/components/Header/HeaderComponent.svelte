<script lang="ts">

    import { HeaderDataStore } from "$lib/store";

    let headerData: string[];

    let widthOfScreen = window.innerWidth;

    $: {
        console.log(widthOfScreen);
    }

    HeaderDataStore.subscribe((value: string[]) => {
        headerData = value;
    })
</script>

<div class="navbar bg-base-100">
     <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Logo</a>
    </div>
    <div class="flex-none">
        {#if widthOfScreen > 500}
            <ul class="menu menu-horizontal px-1">
            {#each headerData as data}
                <li><a href="#{data}">{data}</a></li>
            {/each}
            </ul>
        {:else}
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {#each headerData as data}
                        <li><a href="#{data}">{data}</a></li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>
</div>
