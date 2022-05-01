import cloudy from './cloudy.png';
import day_cloudy_fog from './day-cloudy-fog.png';
import day_cloudy from './day-cloudy.png';
import day_fog from './day-fog.png';
import day_rain_heavy from './day-rain-heavy.png';
import day_rain_light from './day-rain-light.png';
import day_rain_lightening from './day-rain-lightening.png';
import day_snowy from './day-snowy.png';
import day_windy from './day-windy.png';
import fog_cloudy from './fog-cloudy.png';
import humidity from './humidity.png';
import night_cloudy_fog from './night-cloudy-fog.png';
import night_cloudy from './night-cloudy.png';
import night_fog from './night-fog.png';
import night_rain_heavy from './night-rain-heavy.png';
import night_rain_light from './night-rain-light.png';
import night_rain_lightening from './night-rain-lightening.png';
import night_rain_medium from './night-rain-medium.png';
import night_rainy from './night-rainy.png';
import night_snowy from './night-snowy.png';
import night_windy from './night-windy.png';
import night from './night.png';
import rain_heavy from './rain-heavy.png';
import rain_medium from './rain-medium.png';
import rainy from './rainy.png';
import snowy from './snowy.png';
import sunny from './sunny.png';
import sunrise from './sunrise.png';
import sunset from './sunset.png';
import windy from './windy.png';

export function getIcon(desc, time) {
  if (time === 'day') {
    switch (desc) {
      case 'Thunderstorm':
        return day_rain_lightening;
      case 'Drizzle':
        return day_rain_light;
      case 'Rain':
        return day_rain_heavy;
      case 'Snow':
        return day_snowy;
      case 'Sunny':
        return sunny;
      case 'Clear':
        return sunny;
      case 'Clouds':
        return day_cloudy;
      default:
        return day_fog;
    }
  } else {
    switch (desc) {
      case 'Thunderstorm':
        return night_rain_lightening;
      case 'Drizzle':
        return night_rain_light;
      case 'Rain':
        return night_rain_heavy;
      case 'Snow':
        return night_snowy;
      case 'Clear':
        return night;
      case 'Clouds':
        return night_cloudy;
      default:
        return night_fog;
    }
  }
}
