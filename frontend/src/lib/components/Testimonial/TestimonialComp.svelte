<script lang="ts">
	import type { Testimonial } from "$lib/data.msg";


    export let testimonial: Testimonial;

</script>

<div>
    <p>{testimonial.name}</p>
    <p>{testimonial.date}</p>
    <h1>{testimonial.title}</h1>
    <p>{testimonial.details}</p>
</div>
