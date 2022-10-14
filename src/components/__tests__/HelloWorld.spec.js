import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomeView from "../HomeView.vue";

describe("HomeView", () => {
  it("renders properly", () => {
    const wrapper = mount(HomeView, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Conheça mais sobre");
  });
});
// test npx cypress open --component