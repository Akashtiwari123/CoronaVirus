import Registration from "./Registration";
import React from "react";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";

Enzyme.configure({ adapter: new Adapter() });
test("testing registraion", () => {
  const wrapper = mount(<Registration />);

  expect(wrapper.length).toBe(1);
});
