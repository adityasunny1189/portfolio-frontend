<script lang="ts">

    import { TestimonialDataStore } from "$lib/store";
	import type { Testimonial } from "$lib/data.msg";
	import TestimonialComp from "./TestimonialComp.svelte";

    let testimonialsData: Testimonial;

    TestimonialDataStore.subscribe((value: any) => {
        testimonialsData = value;
    })

</script>

<div data-theme="dark" id="Testimonials" class="text-center bg-base-200 py-5">
    <div class="text-4xl my-5 text-white font-medium">Testimonials</div>
    <div class="carousel w-full">
        {#each testimonialsData as testimonial, i}
            <!-- <TestimonialComp testimonial={testimonial} /> -->
            <div id="slide{i+1}" class="carousel-item relative w-full">
                <TestimonialComp testimonial={testimonial} />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide{testimonialsData.length}" class="btn btn-circle opacity-30 hover:opacity-100">❮</a> 
                    <a href="#slide{i+2}" class="btn btn-circle opacity-30 hover:opacity-100">❯</a>
                </div>
            </div> 
        {/each}
    </div>
</div>
