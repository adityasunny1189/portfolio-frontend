<script lang="ts">

    import { EducationDataStore } from "$lib/store";
	import type { Education } from "$lib/data.msg";
	import RoundedInfoComponent from "../Commons/RoundedInfoComponent.svelte";

    let educationData: Education[];

    EducationDataStore.subscribe((value: any) => {
        educationData = value;
    })

</script>

<div data-theme="dark" id="Education" class="text-center bg-base-200 my-2 py-5">
    <div class="text-4xl my-5 font-medium">Education</div>

    <ul class="steps steps-vertical">
        {#each educationData as education}
            <RoundedInfoComponent education={education} />
        {/each}
    </ul>
</div>
