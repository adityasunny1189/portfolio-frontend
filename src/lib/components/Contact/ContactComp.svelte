<script lang="ts">
	import type { Contact } from "$lib/data.msg";

    export let contact: Contact;
</script>

<div class="mx-auto flex">
    <div class="my-2"><a href="{contact.url}">{@html contact.logo}</a></div>
</div>
