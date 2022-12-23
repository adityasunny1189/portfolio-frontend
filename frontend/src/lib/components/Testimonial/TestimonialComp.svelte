<script lang="ts">
	import type { Testimonial } from "$lib/data.msg";


    export let testimonial: Testimonial;

</script>

<div class="container mx-auto px-10">
    <h1 class="font-bold text-error text-xl underline decoration-white underline-offset-4">{testimonial.title}</h1>
    <p class="text-sm py-3 font-light italic indent-8 break-words tracking-wide leading-loose text-info">{testimonial.details}</p>
    <!-- here goes a divider -->
    <p class="font-medium text-success">{testimonial.name}</p>
    <p>{testimonial.date}</p>
</div>
