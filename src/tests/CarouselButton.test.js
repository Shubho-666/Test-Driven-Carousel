import React from "react";

import { shallow } from "enzyme";
import CarouselButton from '../CarouselButton/CarouselButton';


describe('Carousel Button', () => {
    const text = 'Button';
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
    })
    //test to render the button
    it('Renders a button', () => {       
        expect(wrapper.type()).toBe('button')
    })
    //test for passing the props to the button
    it('passes children props to the <button />', () => { 
        expect(wrapper.prop('children')).toBe(text);
    })
    //test for passing other props through the button
    it('passes other props through the <button>', () => {
        const onClick = () => {};
        const className = 'carousel-button';
        const dataAction = 'prev';
        wrapper.setProps({onClick, className, 'data-action': dataAction})
        expect(wrapper.prop('onClick')).toBe(onClick);
        expect(wrapper.prop('className')).toBe(className);
        expect(wrapper.prop('data-action')).toBe(dataAction)
    })
})


