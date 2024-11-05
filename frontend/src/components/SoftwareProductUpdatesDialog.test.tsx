import { render, screen } from "@testing-library/react";
import SoftwareProductUpdatesDialog from "./SoftwareProductUpdatesDialog";

describe("SoftwareProductUpdatesDialog", () => {
    const baseProps = {
        softwareProductName: 'Mock name',
        open: true,
        onClose: () => {}
    }

    it("should render title", () => {
        render(<SoftwareProductUpdatesDialog {...baseProps} />);

        const element = screen.getByRole('heading', { name: `${baseProps.softwareProductName} - Updates` });
        expect(element).toBeInTheDocument();
    });

    it("should render content", () => {
        const mockText = 'Mock text';
        const content = <button>{mockText}</button>;
        render(
            <SoftwareProductUpdatesDialog {...baseProps}>
                <div>{content}</div>
            </SoftwareProductUpdatesDialog>
        );

        const element = screen.getByRole('button', { name: mockText});
        expect(element).toBeInTheDocument();
    });
});