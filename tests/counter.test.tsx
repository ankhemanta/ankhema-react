import * as React from "react";
import { render } from "@testing-library/react";

// import '@testing-library/jest-dom'; // Often imported in a setup file
import { Input } from "../src";



describe("Common render", () => {
    it("renders without crashing", () => {
        // The render function is called here
        const { container } = render(<Components />);

        // A common assertion would use a jest-dom matcher
        // expect(container).toBeInTheDocument(); 
    });
});