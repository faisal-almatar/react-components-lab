import './WeatherForecast.css';

const WeatherIcon = ({ img, imgAlt }) => (
  <img src={img} alt={imgAlt} />
);

const WeatherData = ({ day, conditions, time }) => (
  <>
    <h2>{day}</h2>
    <p><span>conditions: </span>{conditions}</p>
    <p><span>time: </span>{time}</p>
  </>
);

const WeatherForecast = ({ weatherForecasts }) => {
  return (
    <div className="weather-list">
      {weatherForecasts.map((forecast, idx) => (
        <div className="weather" key={idx}>
          <WeatherIcon img={forecast.img} imgAlt={forecast.imgAlt} />
          <WeatherData day={forecast.day} conditions={forecast.conditions} time={forecast.time} />
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;