import { test, expect } from "@playwright/test";
import packageJson from "../package.json" with { type: "json" };

const version = process.env.WIDGET_VERSION || packageJson.version;

const widgetId = process.env.WIDGET_ID || packageJson.name;

test("should display the expected string on the bathtub page", async ({
  page,
}) => {
  const url = `https://demo.1fe.com/bathtub?widgetUrl=https://1fe-a.akamaihd.net/integration/widgets/${widgetId}/${version}/js/1fe-bundle.js&fixPreview=true`;
  await page.goto(url);

  await expect(
    page.getByText("My component from authed widget is mounted!"),
  ).toBeVisible();
});
