<script lang="ts">
	import type { Skill } from "src/lib/data.msg";


    export let skill: Skill;
</script>

<div class="my-2">
    <div class="radial-progress text-info" style="--value:{skill.knowledge};">
        <div class="rounded-full bg-white m-0 p-2">
            <img src="{skill.img_url}" height="30" width="30" alt="{skill.name}">
        </div>
    </div>
    <p class="text-white m-2">{skill.name}</p>
</div>
