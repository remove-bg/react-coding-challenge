import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("contains all required sections", async () => {
    render(<App />);

    expect(screen.getByText("New Releases")).toBeInTheDocument();
    expect(screen.getByText("Featured Playlists")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toBeInTheDocument();
  });
});
