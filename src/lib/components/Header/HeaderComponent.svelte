<script lang="ts">

    import { HeaderDataStore } from "$lib/store";

    let headerData: string[];

    HeaderDataStore.subscribe((value: string[]) => {
        headerData = value;
    })
</script>

<div class="navbar bg-base-100">
     <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Logo</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
        {#each headerData as data}
            <li><a href="#{data}">{data}</a></li>
        {/each}
        </ul>
    </div>
</div>
