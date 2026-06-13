import { expect, test } from "@playwright/test";

test("homepage speaks to service objects and links to the three deep reads", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "软件也是一种服务，为何不还给人民" }),
  ).toBeVisible();
  await expect(page.getByText("我们是一群用键盘搬砖的人")).toBeVisible();
  await expect(page.getByRole("link", { name: "我想一起做事" })).toBeVisible();
  await expect(page.getByRole("link", { name: "我有真实需求" })).toBeVisible();
  await expect(page.getByRole("link", { name: "提出批评" })).toBeVisible();
  await expect(page.getByRole("link", { name: /数据平权宣言/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /牛马互助协议/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /7×7 方向地图/ })).toBeVisible();
});

test("deep read pages render the selected three-piece structure", async ({ page }) => {
  await page.goto("/manifesto");
  await expect(page.getByRole("heading", { name: "数据平权宣言" })).toBeVisible();
  await expect(page.getByText("红利归于人民")).toBeVisible();

  await page.goto("/license");
  await expect(page.getByRole("heading", { name: "牛马互助协议" })).toBeVisible();
  await expect(page.getByText("工友享受 1/3 价")).toBeVisible();

  await page.goto("/map");
  await expect(page.getByRole("heading", { name: "7×7 方向地图" })).toBeVisible();
  await expect(page.getByText("一产、二产、服务业新蓝领")).toBeVisible();
});

