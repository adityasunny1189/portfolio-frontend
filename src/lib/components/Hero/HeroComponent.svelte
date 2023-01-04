<script lang="ts">

    import Typewriter from 'svelte-typewriter'
    import { HeroDataStore } from "$lib/store"; 
	import type { Hero } from "$lib/data.msg";
    import { scale } from 'svelte/transition';

    let heroData: Hero;

    HeroDataStore.subscribe((value: any) => {
        heroData = value;
    })

</script>

<div class="hero min-h-screen bg-base-200">
    <div in:scale class="hero-content flex-col lg:flex-row">
        <div class="rounded-full">
            <img height="200" width="200" src="{heroData.profile_url}" alt="{heroData.name}" class="max-w-sm rounded-full border-4 border-red-400 shadow-red-100 shadow-sm hover:shadow-lg m-2 hover:shadow-red-100" />
        </div>
            <div>
                <Typewriter mode="scramble" interval={100}>
                    <h1 class="text-5xl text-white font-bold">{heroData.name}</h1>
                </Typewriter>
                <Typewriter mode="loop" cursor={false} interval={100}>
                    <h3 class="text-xl h-7 text-success font-thin">{heroData.title}</h3>
                </Typewriter>
                <p class="py-6">{heroData.about}</p>
            </div>
    </div>
</div>