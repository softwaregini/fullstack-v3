import { screen, render } from "@testing-library/react";
import SoftwareProductUpdateItem, { Props } from "./SoftwareProductUpdateItem";


describe("SoftwareProductUpdateItem", () => {
    const baseProps: Props = {
        softwareProductUpdate: {
            id: 'Mock id',
            update: 'Mock name',
            seen: false
        }
    }

    it("should render name", () => {
        render(<SoftwareProductUpdateItem {...baseProps} />);

        const element = screen.getByText(baseProps.softwareProductUpdate.update);
        expect(element).toBeInTheDocument();
    });

    it.each`
        testNamePart     |  seen        |   ariaLabel
        ${'not render'}  |  ${true}     |   ${`${baseProps.softwareProductUpdate.update} seen`}
        ${'render'}      |  ${false}    |   ${`${baseProps.softwareProductUpdate.update} unseen`}
    `("should $testNamePart badge when seen=$seen", ({seen, ariaLabel}) => {
        const props = {
            ...baseProps,
            softwareProductUpdate: {
                ...baseProps.softwareProductUpdate,
                seen
            }
        }
        
        render(<SoftwareProductUpdateItem {...props} />);
        
        const element = screen.getByLabelText(ariaLabel);
        expect(element).toBeInTheDocument();
    });
});