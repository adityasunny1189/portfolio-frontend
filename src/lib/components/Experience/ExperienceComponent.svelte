<script lang="ts">

    import { ExperienceDataStore } from "$lib/store";
	import type { Experience } from "$lib/data.msg";
	import ExperienceComp from "./ExperienceComp.svelte";

    let experienceData: Experience[];

    ExperienceDataStore.subscribe((value: any) => {
        experienceData = value;
    })

</script>

<div data-theme="dark" id="Experience" class="text-center py-5">
    <div class="text-4xl my-5 text-white font-medium">Experience</div>

    <ul class="steps steps-vertical">
        {#each experienceData as experience}
            <ExperienceComp experience={experience} />
        {/each}
    </ul>
</div>
