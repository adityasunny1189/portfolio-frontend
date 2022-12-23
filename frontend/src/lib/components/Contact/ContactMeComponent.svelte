<script lang="ts">
	import type { Contact } from "$lib/data.msg";
	import ContactComp from "./ContactComp.svelte";


    let contacts: Contact[] = [
        {
            "name": "Github",
            "url": "",
            "logo": ""
        },
        {
            "name": "Medium",
            "url": "",
            "logo": ""
        },
        {
            "name": "Linkedln",
            "url": "",
            "logo": ""
        },
        {
            "name": "Email",
            "url": "",
            "logo": ""
        },
        {
            "name": "Instagram",
            "url": "",
            "logo": ""
        },
        {
            "name": "Twitter",
            "url": "",
            "logo": ""
        }
    ]

</script>

<div data-theme="dark" id="Education" class="text-center bg-base-200 py-5">
    <div class="text-4xl my-5 font-medium">Contact Me</div>

    <div class="grid grid-cols-3 gap-4 my-5">
        {#each contacts as contact}
            <ContactComp contact={contact} />
        {/each}
    </div>
    
</div>
