import { expect, test } from "@playwright/test";

test.describe("byteCare website", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("page loads", async ({ page }) => {
		await expect(page).toHaveTitle(
			"byteCare - Empowering small businesses to unlock the power of AI."
		);
		await expect(page).toHaveURL("/");
	});

	test("navigation is visible", async ({ page }) =>
		await expect(page.getByRole("navigation")).toBeVisible());

	test("sections are visible", async ({ page }) => {
		const sections = ["#hero", "#services", "#about", "#contact"];

		for (const sectionId of sections) {
			const section = page.locator(sectionId);
			await expect(section).toBeVisible();
		}
	});

	// Add tests to check if service cards are visible

	// Add tests to check imprint and privacy policy load

	test("images are visible", async ({ page }) => {
		const images = ["byteCare logo", "byteCare founder"];
		for (const image of images) {
			const img = page.getByAltText(image);
			await expect(img).toBeVisible();
		}
	});

	// Add test to check buttons work

	// Add tests to check mobile views

	test("footer is visible", async ({ page }) =>
		await expect(page.getByRole("contentinfo")).toBeVisible());
});
