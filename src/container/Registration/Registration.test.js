import Registration from "./Registration";
import React from "react";
import { render } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";

Enzyme.configure({ adapter: new Adapter() });
test("testing registraion", () => {
  const wrapper = render(<Registration />);
  expect(wrapper).toMatchSnapshot();
});
