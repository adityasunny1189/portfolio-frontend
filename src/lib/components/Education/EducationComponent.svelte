<script lang="ts">

    import { EducationDataStore } from "$lib/store";
	import type { Education } from "$lib/data.msg";

    let educationData: Education;

    EducationDataStore.subscribe((value: any) => {
        educationData = value;
    })

</script>

<div data-theme="dark" id="Education" class="text-center bg-base-200 py-5">
    <div class="text-4xl my-5 font-medium">Education</div>
    <ul class="steps steps-vertical">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
    </ul>
</div>
