import { Before, After, Status } from "@cucumber/cucumber";
import {
    chromium,
    type Browser,
    type BrowserContext,
    type Page
} from "@playwright/test";

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;
// Before Hook
Before(async function () {
    browser = await chromium.launch({
        headless: false
    });

    context = await browser.newContext();
    page = await context.newPage();
});

// After Hook - Screenshot on failure
After(async function () {

    if (this.result?.status === Status.FAILED && page && !page.isClosed()) {

        const screenshot = await page.screenshot({
            fullPage: true
        });

        await this.attach(screenshot, "image/png");
    }

    await context?.close();
    await browser?.close();
});