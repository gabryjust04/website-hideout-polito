import { render, screen } from "@testing-library/react";
import TeamPage from "@/app/team/page";
import { availableYears } from "@/data/team";

jest.mock("next/navigation", () => ({
  usePathname: () => "/team"
}));

describe("TeamPage", () => {
  it("renders sections for the selected year", () => {
    render(<TeamPage />);
    expect(screen.getByText(/Studenti che rendono possibile Hideout/i)).toBeInTheDocument();
    availableYears.forEach((year) => {
      expect(screen.getByRole("tab", { name: year })).toBeInTheDocument();
    });
  });
});
