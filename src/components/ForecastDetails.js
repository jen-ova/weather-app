import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/weather-icons-wind.css";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__temperature">
        {`Max temp: ${temperature.max}`}&deg;C
      </div>
      <div className="forecast-details__temperature">
        {`Min temp: ${temperature.min}`}&deg;C
      </div>
      <div className="forecast-details__humidity" data-testid="forecast-icon">
        Humidity: {humidity}%
      </div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}mph
        <i className={`wi wi-wind wi-from-${wind.direction} wind-icon`} />
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
