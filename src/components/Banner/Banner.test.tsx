import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Banner } from "./Banner";

describe("Banner Component", () => {
  it("renders title when provided", () => {
    render(<Banner title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<Banner title="Title" subTitle="Test Subtitle" />);
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("renders children when provided", () => {
    render(
      <Banner title="Title">
        <button>Click Me</button>
      </Banner>
    );
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies custom background color", () => {
    const { container } = render(
      <Banner title="Title" bgColor="#FF0000" />
    );
    const banner = container.querySelector('[data-size]');
    expect(banner).toHaveStyle({ backgroundColor: "#FF0000" });
  });

  it("uses default medium size when size prop is not provided", () => {
    const { container } = render(<Banner title="Title" />);
    const banner = container.querySelector('[data-size="medium"]');
    expect(banner).toBeInTheDocument();
  });

  it("applies correct size attribute", () => {
    const { container } = render(<Banner title="Title" size="large" />);
    const banner = container.querySelector('[data-size="large"]');
    expect(banner).toBeInTheDocument();
  });

  it("does not render title element when title is not provided", () => {
    const { container } = render(<Banner />);
    const title = container.querySelector("h2");
    expect(title).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Banner title="Title" className="custom-class" />
    );
    const banner = container.querySelector(".custom-class");
    expect(banner).toBeInTheDocument();
  });
});
