import { mount, shallow, } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import { Entry } from './Entry';

describe('<Entry />', () => {
    it('renders correctly', () => {
        expect(renderer.create(
            <Entry
                title='dummy'
                icon={<div />}
                clickable
                onClick={jest.fn()} />
        ).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(
            <Entry
                title='dummy'
                icon={<div />}
                clickable
                onClick={jest.fn()} />
        );
    });

    it('clicks without triggering', () => {
        const onClick = jest.fn();

        shallow(
            <Entry
                title='dummy'
                icon='dummy'
                clickable={false}
                onClick={onClick} />
        ).simulate('click');

        expect(onClick.mock.calls.length).toEqual(0);
    });

    it('triggers onClick when clicked', () => {
        const onClick = jest.fn();

        shallow(
            <Entry
                title='dummy'
                icon='dummy'
                clickable
                onClick={onClick} />
        ).simulate('click');

        expect(onClick.mock.calls.length).toEqual(1);
    });
});
