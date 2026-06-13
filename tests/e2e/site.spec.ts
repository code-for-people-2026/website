import { expect, test } from "@playwright/test";

test("homepage speaks to service objects and links to the three deep reads", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "软件也是一种服务，为何不还给人民" }),
  ).toBeVisible();
  await expect(page.getByText("这是一个面向普通劳动者的软件项目")).toBeVisible();
  await expect(page.getByText("我们不卖课，也不先卖一个现成产品")).toBeVisible();
  await expect(page.getByRole("link", { name: "我遇到具体麻烦" })).toBeVisible();
  await expect(page.getByRole("link", { name: "我想介绍给别人" })).toBeVisible();
  await expect(page.getByRole("link", { name: "我想一起做点事" })).toBeVisible();
  await expect(page.getByText("真实收集入口还在准备中")).toBeVisible();
  await expect(page.getByRole("heading", { name: "如果你是第一次看到这里。" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "我遇到一个具体麻烦" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "我想介绍给别人" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "我想一起做点事" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "我们先看见这些日常。" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "想看深一点，可以从这三页开始。" }),
  ).toBeVisible();

  for (const label of ["我遇到具体麻烦", "我想介绍给别人", "我想一起做点事"]) {
    await expect(page.getByRole("link", { name: label })).toHaveAttribute(
      "href",
      "#tencent-form-pending",
    );
  }

  await expect(page.getByRole("link", { name: /数据平权宣言/ })).toHaveAttribute(
    "href",
    "/manifesto",
  );
  await expect(page.getByRole("link", { name: /牛马互助协议/ })).toHaveAttribute("href", "/license");
  await expect(page.getByRole("link", { name: /7×7 方向地图/ })).toHaveAttribute("href", "/map");
  await expect(
    page.getByText("我们为什么认为 AI 时代的软件红利，不该只变成新的平台租金。"),
  ).toBeVisible();
  await expect(
    page.getByText("我们怎样把工友价、收入差距上限和接受监督写成公开规则。"),
  ).toBeVisible();
  await expect(
    page.getByText("我们用这张地图检查：哪些人、哪些日常问题，还没有被认真服务。"),
  ).toBeVisible();
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

test("payload baseline routes are reachable", async ({ page, request }) => {
  const formLinksResponse = await request.get("/api/form-links?limit=1");
  expect(formLinksResponse.status()).toBeLessThan(500);

  const adminResponse = await page.goto("/admin");
  expect(adminResponse?.status()).toBeLessThan(500);
  await expect(page.locator("body")).not.toContainText("Application error");
});
