import { describe, beforeEach, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

global.fetch = vi.fn();

describe("App component", () => {

    const JOKE = "I accidentally took my cats meds last night. Don’t ask meow.";

    beforeEach(() => {
        render(<App />);
    });

    it("header should be present", () => {
        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
    });

    it("header should have text", () => {
        const element = screen.getByRole("heading");
        expect(element).toHaveTextContent("Lets hear some dad jokes!");
    });

    it("button should be present", () => {
        const element = screen.getByRole("button");
        expect(element).toBeInTheDocument();
    });

    it("button should have text", () => {
        const element = screen.getByRole("button");
        expect(element).toHaveTextContent("Fetch Joke");
    });

    it("punch line should be hidden", () => {
        const element = screen.queryByText(JOKE);
        expect(element).not.toBeInTheDocument();
    });

    describe("use clicks the fetch joke button", () => {

        beforeEach(() => {
            const result = {
                id: "R7UfaahVFD",
                joke: JOKE,
                "status": 200
            };
            fetch.mockResolvedValue( {
                json: () => new Promise((resolve) => resolve(result))
            });
        });

        it("fetch button is clicked expect button text", async () => {
            const button = screen.getByRole("button");
            await userEvent.click(button);
            expect(button).toHaveTextContent("Fetch Another Joke");
        });

        it("fetch button is clicked punch line present", async () => {
            const button = screen.getByRole("button");
            await userEvent.click(button);
            const punchLine = screen.getByText(JOKE);
            expect(punchLine).toBeInTheDocument();
        });

        it("fetch button is clicked expect punch line text", async () => {
            const button = screen.getByRole("button");
            await userEvent.click(button);
            const punchLine = screen.getByText(JOKE);
            expect(punchLine).toHaveTextContent(JOKE);
        });
    });
});
