import type { Icon as LucidIcon } from "lucide-svelte";
import type { ComponentType } from "svelte";

export interface Service {
	icon: ComponentType<LucidIcon>;
	title: string;
	description: string;
}

export interface Project {
	name: string;
	description: string;
}

export interface Testimonial {
	name: string;
	company: string;
	text: string;
}
