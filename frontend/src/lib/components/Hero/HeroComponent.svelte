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
            <img height="200" width="200" src="https://avatars.githubusercontent.com/u/46691394?s=400&u=a121551d417dad985fa046371edcd7306f200204&v=4" alt="{heroData.name}" class="max-w-sm rounded-full border-4 border-green-400 shadow-red-100 shadow-sm hover:shadow-lg m-2 hover:shadow-red-100" />
        </div>
            <div>
                <Typewriter mode="scramble" interval={100}>
                    <h1 class="text-5xl font-bold">{heroData.name}</h1>
                </Typewriter>
                <Typewriter mode="loop" cursor={false} interval={100}>
                    <h3 class="text-xl font-thin">{heroData.title}</h3>
                </Typewriter>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
    </div>
</div>