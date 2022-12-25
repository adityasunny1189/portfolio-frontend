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
            <h1 class="text-xl font-bold">{education.name}</h1>
            <h3 class="text-lg font-thin">{education.title}</h3>
            <p class="shrink w-64">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
    </div>
</div>
