import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BeerItem from "../BeerItem.vue";

describe("BeerItem", () => {
  it("renders properly", () => {
    const wrapper = mount(BeerItem, { props: { data: { name: "Beer Test" } } });
    expect(wrapper.text()).toContain("Beer Test");
  });
});
