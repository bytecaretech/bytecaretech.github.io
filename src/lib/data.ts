import { servicesText } from "$lib/texts";
import type { Client, Project, Service } from "$lib/types";
import { CodeIcon, GraduationCapIcon, LightbulbIcon } from "lucide-svelte";

export const services: Service[] = [
	{
		icon: LightbulbIcon,
		title: servicesText.consulting.title,
		description: servicesText.consulting.description
	},
	{
		icon: CodeIcon,
		title: servicesText.software.title,
		description: servicesText.software.description
	},
	{
		icon: GraduationCapIcon,
		title: servicesText.strategy.title,
		description: servicesText.strategy.description
	}
];

// TODO: Define texts in texts.ts and import here
export const projects: Project[] = [
	{
		name: "Plant process optimization",
		description: "tbd"
	},
	{
		name: "AI-powered personal finance coach",
		description: "tbd"
	},
	{
		name: "MLOps Bootcamp",
		description:
			"Technology-agnostic training teaching MLOps concepts and best practices to engineers and data scientists."
	},
	{
		name: "Kubeflow for Data Scientists",
		description:
			"Built a scalable, high-performance data science platform powered by Kubeflow, MLFlow and Kubernetes."
	}
];

export const clients: Client[] = [
	{
		name: "CommaSoft AG",
		link: "https://comma-soft.com/",
		text: "byteCare transformed our operations with their innovative solutions."
	},
	{
		name: "New Digital Intelligence",
		link: "https://new-digital-intelligence.com/",
		text: "The team's expertise and dedication are unmatched. Highly recommended!"
	},
	{
		name: "AixPonic GmbH",
		link: "https://www.aixponic.de/",
		text: "byteCare's solutions have significantly improved our efficiency and productivity."
	}
];
