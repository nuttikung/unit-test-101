import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./card";

describe("<Card />", () => {
  it("should render Card with default props", () => {
    render(<Card>This is card component</Card>);

    expect(screen.getByText("This is card component")).toBeInTheDocument();
  });

  it("should call onClick when user click on Card", () => {
    const mockOnClick = vi.fn();

    render(<Card onClick={mockOnClick}>This is card component</Card>);

    fireEvent.click(screen.getByText("This is card component"));

    expect(mockOnClick).toHaveBeenCalled();

  });
});
