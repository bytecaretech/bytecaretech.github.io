import type { CodeIcon } from "lucide-svelte";

export interface ServiceItem {
    key: string;
    icon: typeof CodeIcon;
}

export interface Project {
    name: string;
    description: string;
}

export interface Client {
    name: string;
    link: string;
    text: string;
}
