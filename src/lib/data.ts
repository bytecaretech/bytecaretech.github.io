import { LaptopIcon, CodeIcon, LightbulbIcon } from "lucide-svelte";
import type { Service, Project, Testimonial } from "$lib/types";
import { servicesText } from "$lib/texts";

export const services: Service[] = [
	{
		icon: LaptopIcon,
		title: servicesText.consulting.title,
		description: servicesText.consulting.description
	},
	{
		icon: CodeIcon,
		title: servicesText.software.title,
		description: servicesText.software.description
	},
	{
		icon: LightbulbIcon,
		title: servicesText.strategy.title,
		description: servicesText.strategy.description
	}
];

// TODO: Define texts in texts.ts and import here
export const projects: Project[] = [
	{
		name: "MLOps Training",
		description:
			"Technology-agnostic training teaching MLOps concepts and best practices to engineers and data scientists."
	},
	{
		name: "Data Science Platform",
		description:
			"Built a scalable, high-performance data science platform powered by Kubeflow, MLFlow and Kubernetes."
	}
];

export const testimonials: Testimonial[] = [
	{
		name: "John Doe",
		company: "TechCorp",
		text: "byteCare transformed our operations with their innovative solutions."
	},
	{
		name: "Jane Smith",
		company: "DataDrive",
		text: "The team's expertise and dedication are unmatched. Highly recommended!"
	}
];
