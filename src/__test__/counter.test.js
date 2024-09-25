import { render, screen, fireEvent } from "@testing-library/react";
import AppCounter from "../components/AppCounter";

describe("AppCounter Component", () => {
  test("renders with initial count", () => {
    render(<AppCounter />);
    const countElement = screen.getByText(/Счетчик: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test('increments the count when "Увеличить" button is clicked', () => {
    render(<AppCounter />);
    const incrementButton = screen.getByText(/Увеличить/i);
    fireEvent.click(incrementButton);
    const countElement = screen.getByText(/Счетчик: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('decrements the count when "Уменьшить" button is clicked', () => {
    render(<AppCounter />);
    const decrementButton = screen.getByText(/Уменьшить/i);
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/Счетчик: -1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('resets the count when "Сбросить" button is clicked', () => {
    render(<AppCounter />);
    const incrementButton = screen.getByText(/Увеличить/i);
    fireEvent.click(incrementButton); // Увеличиваем счетчик
    fireEvent.click(incrementButton); // Увеличиваем счетчик еще раз
    const resetButton = screen.getByText(/Сбросить/i);
    fireEvent.click(resetButton);
    const countElement = screen.getByText(/Счетчик: 0/i);
    expect(countElement).toBeInTheDocument();
  });
});
