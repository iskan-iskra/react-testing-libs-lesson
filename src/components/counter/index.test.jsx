import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import Counter from "./index";

describe("Counter Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("изначально отображает счетчик со значением 0", () => {
    render(<Counter />);
    const counterValue = screen.getByText(/счетчик:/i);
    expect(counterValue.textContent).toBe("Счетчик: 0");
  });

  it('увеличивает счетчик при нажатии кнопки "Увеличить"', () => {
    render(<Counter />);
    const increaseButton = screen.getByText(/увеличить/i);
    fireEvent.click(increaseButton);
    expect(screen.getByText(/счетчик:/i).textContent).toBe("Счетчик: 1");
  });

  it('уменьшает счетчик при нажатии кнопки "Уменьшить"', () => {
    render(<Counter />);
    const decreaseButton = screen.getByText(/уменьшить/i);
    fireEvent.click(decreaseButton);
    expect(screen.getByText(/счетчик:/i).textContent).toBe("Счетчик: -1");
  });

  it('сбрасывает счетчик при нажатии кнопки "Сбросить"', () => {
    render(<Counter />);
    const increaseButton = screen.getByText(/увеличить/i);
    fireEvent.click(increaseButton);
    fireEvent.click(screen.getByText(/сбросить/i));
    expect(screen.getByText(/счетчик:/i).textContent).toBe("Счетчик: 0");
  });
});
