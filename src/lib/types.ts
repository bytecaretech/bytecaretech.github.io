import type { Icon as LucidIcon } from "lucide-svelte";

export interface ServiceItem {
    key: string;
    icon: LucidIcon;
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
