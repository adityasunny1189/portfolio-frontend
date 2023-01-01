<script lang="ts">
	import type { Experience } from "$lib/data.msg";

    export let experience: Experience;

</script>

<div class="text-start">
    <div class="flex">
        <div class="mx-3">
            <img class="rounded-full h-20 w-20" src="{experience.img_url}" alt="{experience.name}">
            <p>{experience.start_year}-</p>
            <p>{experience.end_year}</p>
        </div>
        <div class="">
            <h1 class="text-xl text-[#f97316] font-bold">{experience.name}</h1>
            <h3 class="text-lg text-success font-thin">{experience.title} <span class="text-info">[{experience.job_type}]</span></h3>
            <p class="shrink w-64">{experience.about}</p>
            <div class="mt-1 shrink w-64">
                {#each experience.tech as t}
                    <p class="badge badge-warning mx-1 badge-outline">{t}</p>
                {/each}
            </div>
        </div>
    </div>
</div>
