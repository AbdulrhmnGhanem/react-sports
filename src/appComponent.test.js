import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import App from "./App";
import ValueInput from "./ValueInput";

Enzyme.configure({ adapter: new Adapter() });

it('should Render three value input', () => {
    const wrapper = shallow(<App />);
    const valCount = wrapper.find(ValueInput).length;
    expect(valCount).toBe(3)
});

it("should fully renders three inputs", () => {
    const wrapper = mount(<App title="tester" />);
    const count = wrapper.find("input.form-control").length;
    expect(count).toBe(3);
});

it('should Shallow render zero inputs', function () {
    const wrapper = shallow(<App />);
    const count = wrapper.find("input.form-control").length;
    expect(count).toBe(0)
    
}); 