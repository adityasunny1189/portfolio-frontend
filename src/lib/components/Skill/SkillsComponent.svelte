<script lang="ts">
    import SkillComponent from "./SkillComponent.svelte";
    import { SkillsDataStore } from "$lib/store";
	import type { Skill } from "$lib/data.msg";

    let skills: Skill

    SkillsDataStore.subscribe((value: any) => {
        skills = value;
    })

</script>

<div data-theme="dark" id="Skills" class="text-center py-5">
    <div class="text-4xl my-5 text-white font-medium">Skills</div>
    <div class="grid grid-cols-4 gap-4">
        {#each skills as skill}
            <SkillComponent skill={skill} />
        {/each}
    </div>
</div>
