<script lang="ts">
	import { onMount } from "svelte";
	import type { Data } from "../data.msg";
    import BodyComponent from "./BodyComponent.svelte";
    import LoaderComponent from "./Loader/LoaderComponent.svelte";
    import { 
        HeaderDataStore, 
        HeroDataStore,
        SkillsDataStore,
        EducationDataStore,
        ExperienceDataStore,
        TestimonialDataStore,
        FooterDataStore
    } from '$lib/store.ts';

    let isLoading: boolean = true;
    let data: Data;

    const fetchData = async () => {
        let url: string = "https://portfolio-production-a974.up.railway.app/";
        const response = await fetch(url, {
            method: "GET"
        });
        data = await response.json();
        isLoading = false;
        console.log(data);
        initStoreData();
    }

    const initStoreData = () => {
        HeaderDataStore.set(data.header);
        HeroDataStore.set(data.hero);
        SkillsDataStore.set(data.skills);
        EducationDataStore.set(data.education);
        ExperienceDataStore.set(data.experience);
        TestimonialDataStore.set(data.testimonials);
        FooterDataStore.set(data.footer);
    }

    onMount(async () => {
        await fetchData();
    })

</script>

<div>
    {#if isLoading}
        <LoaderComponent />
    {:else}
        <BodyComponent />
    {/if}
</div>
