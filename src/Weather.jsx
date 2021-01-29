import React from "react";
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const customStyles = {
	fontFamily:  'Roboto, sans-serif',
	gradientStart:  '#252525',
	gradientMid:  '#252525',
	gradientEnd:  '#252525',
	locationFontColor:  '#FFF',
	todayTempFontColor:  '#FFF',
	todayDateFontColor:  '#B5DEF4',
	todayRangeFontColor:  '#B5DEF4',
	todayDescFontColor:  '#B5DEF4',
	todayInfoFontColor:  '#B5DEF4',
	todayIconColor:  '#FFF',
	forecastBackgroundColor:  '#FFF',
	forecastSeparatorColor:  '#DDD',
	forecastDateColor:  '#000',
	forecastDescColor:  '#000',
	forecastRangeColor:  '#000',
    forecastIconColor:  '#000'
};




function  Weather() {

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '22deadef4074d6f4e94ed44000f444f2',
        lat: '33.5928',
        lon: '-7.6192',
        lang: 'en',
        unit: 'metric', 
      });

    return (
        <ReactWeather
          theme={customStyles}
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Casablanca, MA"
          unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
          showForecast={true}
        />
    );
}

export default Weather;