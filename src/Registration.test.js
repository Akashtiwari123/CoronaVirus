import Registration from "./Registration";
import React from 'react';
import {shallow,mount} from "enzyme";

test('testing registraion', () => {

    const wrapper = mount(<Registration />);
 
    expect(wrapper.length).toBe(1);
  });
  
