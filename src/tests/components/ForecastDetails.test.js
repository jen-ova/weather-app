import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1525046400000,
    humidity: 30,
    temperature: {
      min: 12,
      max: 22,
    },
    wind: {
      speed: 10,
      direction: "s",
    },
  };

  it("renders", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails forecast={validProps} />
    );

    expect(getByText("Mon 30th Apr")).toHaveClass("forecast-details__date");
    expect(getByText("Max temp: 22°C")).toHaveClass(
      "forecast-details__temperature"
    );
    expect(getByText("Min temp: 12°C")).toHaveClass(
      "forecast-details__temperature"
    );
    expect(getByText("Humidity: 30%")).toHaveClass(
      "forecast-details__humidity"
    );
    expect(getByText("Wind speed: 10mph")).toHaveClass(
      "forecast-details__wind"
    );
    expect(getByText("Wind direction: S")).toHaveClass(
      "forecast-details__direction"
    );
  });
});
