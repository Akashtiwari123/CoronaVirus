import Registration from "./Registration";
import React from "react";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApiData from "./ApiData";

Enzyme.configure({ adapter: new Adapter() });
describe("Api", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ApiData debug />);

    expect(component).toMatchSnapshot();
  });
});
