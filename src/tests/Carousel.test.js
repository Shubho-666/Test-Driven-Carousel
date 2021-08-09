import { shallow } from "enzyme";
import React from "react";
import Carousel from "../Carousel/Carousel.jsx";
import CarouselButton from '../CarouselButton/CarouselButton.js'
import CarouselSlide from '../CarouselSlide/CarouselSlide.jsx'

describe('Carousel', () => {
    let wrapper;
    const slides = [
        {
            imgUrl: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png',
            description: 'Slide 1',
            attibution: 'Image 1'
        },
        {
            imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            description: 'Slide 2',
            attibution: 'Image 3'
        },
        {
            imgUrl: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
            description: 'Slide 3',
            attibution: 'Image 3'
        }
    ]


    beforeEach(() => {
        wrapper = shallow(< Carousel slides={slides} />);
    })

    it('renders a <div>', () => {
        expect(wrapper.type()).toBe('div')
    })

    it('has an initial `slideIndex` of 0', () => {
        expect(wrapper.state('slideIndex')).toBe(0);
    })

    it('renders a CarouselButton labeled `prev`', () => {
        expect(wrapper.find(CarouselButton).at(0).prop('children')).toBe('Prev')
    })
    it('renders a CarouselButton labeled `next`', () => {
        expect(wrapper.find(CarouselButton).at(1).prop('children')).toBe('Next')
    })

    describe('with a middle slide selected', () => {
        beforeEach(() => {
            wrapper.setState({ slideIndex: 1 })
        })

        it('decrements slideIndex when Prev is clicked', () => {
            wrapper.setState({ slideIndex: 1 });
            wrapper.find('[data-action="prev"]').simulate('click');
            expect(wrapper.state('slideIndex')).toBe(0);
        })

        it('increments slideIndex when Next is clicked', () => {
            wrapper.setState({ slideIndex: 1 });
            wrapper.find('[data-action="next"]').simulate('click');
            expect(wrapper.state('slideIndex')).toBe(2);
        })

    })
 
    describe('with the first slide selected', () => {
        it('wraps `slideIndex` to the max value when the Prev is clicked', () => {
            wrapper.setState({ slideIndex: 0 });
            wrapper.find('[data-action="prev"]').simulate('click');
            expect(wrapper.state('slideIndex')).toBe(slides.length - 1);
        })
    })

    describe('with the last slide selected', () => {
        it('wraps `slideIndex` to the min value when the Prev is clicked', () => {
            wrapper.setState({ slideIndex: slides.length - 1 });
            wrapper.find('[data-action="next"]').simulate('click');
            expect(wrapper.state('slideIndex')).toBe(0);
        })
    })

    it('renders the current slide as a  CarouselSlide', () => {
        let slideProps;
        slideProps = wrapper.find(CarouselSlide).props();
        expect(slideProps).toEqual(slides[0]);
        wrapper.setState({ slideIndex: 1 });
        slideProps = wrapper.find(CarouselSlide).props();
        expect(slideProps).toEqual(slides[1]); 
    })

})

