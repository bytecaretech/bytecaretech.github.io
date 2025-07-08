/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#6755D3",
                secondary: "#9386EE",
                accent: "#F5F5F5",
                "brand-black": "#333333",
                "brand-blue": "#20204C"
            }
        }
    },
    plugins: []
};
