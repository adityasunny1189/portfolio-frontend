import { writable } from 'svelte/store';
import type { 
    Hero, 
    Skill, 
    Education, 
    Experience, 
    Footer, 
    Testimonial 
} from '$lib/data.msg';

export const HeaderDataStore = writable<string[]>([]);
export const HeroDataStore = writable<Hero>();
export const SkillsDataStore = writable<Skill[]>([]);
export const EducationDataStore = writable<Education[]>([]);
export const ExperienceDataStore = writable<Experience[]>([]);
export const TestimonialDataStore = writable<Testimonial[]>([]);
export const FooterDataStore = writable<Footer>();
