<script lang="ts">
	import type { Education } from "$lib/data.msg";



    export let education: Education;

</script>

<div class="text-start">
    <div class="flex">
        <div class="mx-3">
            <img class="rounded-full h-20 w-20" src="{education.img_url}" alt="{education.name}">
            <p>{education.start_year}-{education.end_year}</p>
        </div>
        <div class="">
            <h1 class="text-xl text-[#f97316] font-bold">{education.name}</h1>
            <h3 class="text-lg text-success font-thin">{education.title}</h3>
            <p class="shrink w-64">{education.description}</p>
        </div>
    </div>
</div>
