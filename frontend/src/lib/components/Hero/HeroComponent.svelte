<script lang="ts">

    import { HeroDataStore } from "$lib/store"; 
	import type { Hero } from "$lib/data.msg";

    let heroData: Hero;

    HeroDataStore.subscribe((value: any) => {
        heroData = value;
    })

</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="https://avatars.githubusercontent.com/u/46691394?v=4" alt="{heroData.name}" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
            <h1 class="text-5xl font-bold">{heroData.name}</h1>
            <h3 class="text-2xl font-medium">{heroData.title}</h3>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
    </div>
</div>