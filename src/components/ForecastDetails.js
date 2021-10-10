import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";
import moment from "moment";

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
      <div className="forecast-details__wind">Wind speed: {wind.speed}mph</div>
      <div className="forecast-details__direction">
        Wind direction: {wind.direction.toUpperCase()}
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
