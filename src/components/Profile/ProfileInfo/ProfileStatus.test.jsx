import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status from props should be in local state", () => {
        const component = create(<ProfileStatus status="itCamasutra.com" />);
        const instance = component.getInstance(); // instance переводится как эеземпляр
        expect(instance.state.status).toBe("itCamasutra.com");
    });

    test("After creation, span should be displayed", () => {
        const component = create(<ProfileStatus status="itCamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("After creation, input should not be displayed", () => {
        const component = create(<ProfileStatus status="itCamasutra.com" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("After creation, span should contains right status", () => {
        const component = create(<ProfileStatus status="itCamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("itCamasutra.com");
    });

    test("Input should be turns in edit mode", () => {
        let component = create(<ProfileStatus status="itCamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("itCamasutra.com");
    });
});