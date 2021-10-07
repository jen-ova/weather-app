import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "stubDescription1",
      icon: "211",
      temperature: {
        min: 12,
        max: 24,
      },
    },
    {
      date: 2222222,
      description: "stubDescription2",
      icon: "781",
      temperature: {
        min: 7,
        max: 14,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
