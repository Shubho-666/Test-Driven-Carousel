import { shallow } from "enzyme";
import React from "react";
import CarouselSlide from "../CarouselSlide/CarouselSlide.jsx";

describe('CarouselSlide', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CarouselSlide />)
    })

    it('renders a <figure>', () => {        
        expect(wrapper.type()).toBe('figure');
    })

    it('renders an <img> and <figcaption> as children', () => {
        expect(wrapper.childAt(0).type()).toBe('img')
        expect(wrapper.childAt(1).type()).toBe('figcaption')
    })

    it('passes "imgUrl" through the <img>', () => {
        const imgUrl = 'https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fimgcomfort.com%2Fas%2Fabout%2F&psig=AOvVaw308Yq-v7H0VYCCmWkeRYZC&ust=1628369297976000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKC4x8GinfICFQAAAAAdAAAAABAD'
        wrapper.setProps({ imgUrl });
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(imgUrl);
    })

    it('uses `description` and `attribution` as <figcaption>', () => {
        const description = 'A nice image';
        const attribution = 'Shubhodeep Bhattacharya'
        wrapper.setProps({ description, attribution });
        expect(wrapper.find('figcaption strong').text()).toBe(description);
    })

    it('passes other props through the <figure>', () => {
        const style = {};
        const onClick = () => {};
        const className = 'carousel-slide'
        wrapper.setProps({ style, onClick, className })
        expect(wrapper.prop('style')).toBe(style);
        expect(wrapper.prop('onClick')).toBe(onClick);
        expect(wrapper.prop('className')).toBe(className); 
    })
})