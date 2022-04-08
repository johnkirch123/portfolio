// const cloudy = require('./cloudy.png');
// const day_cloudy_fog = require('./day-cloudy-fog.png');
// const day_cloudy = require('./day-cloudy.png');
// const day_fog = require('./day-fog.png');
// const day_rain_heavy = require('./day-rain-heavy.png');
// const day_rain_light = require('./day-rain-light.png');
// const fog_cloudy = require('./fog-cloudy.png');
// const night_cloudy_fog = require('./night-rain-heavy-fog.png');
// const night_cloudy = require('./night-cloudy.png');
// const night_fog = require('./night-fog.png');
// const night_rain_heavy = require('./night-rain-heavy.png');
// const night_rain_light = require('./night-rain-light.png');
// const night_rain_lightening = require('./night-rain-lightening.png');
// const night_rain_medium = require('./night-rain-medium.png');
// const night_rainy = require('./night-rainy.png');
// const night_snowy = require('./night-snowy.png');
// const night_windy = require('./night-windy.png');
// const night = require('./night.png');
// const rain_heavy = require('./rain-heavy.png');
// const rain_medium = require('./rain-medium.png');
// const rainy = require('./rainy.png');
// const snowy = require('./snowy.png');
// const sunrise = require('./sunrsie.png');
// const sunset = require('./sunset.png');
// const windy = require('./windy.png');

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
        break;
      case 'Drizzle':
        return day_rain_light;
        break;
      case 'Rain':
        return day_rain_heavy;
        break;
      case 'Snow':
        return day_snowy;
        break;
      case 'Sunny':
        return sunny;
        break;
      case 'Clear':
        return sunny;
        break;
      case 'Clouds':
        return day_cloudy;
        break;
      case 'default':
        return day_fog;
        break;
    }
  } else {
    switch (desc) {
      case 'Thunderstorm':
        return night_rain_lightening;
        break;
      case 'Drizzle':
        return night_rain_light;
        break;
      case 'Rain':
        return night_rain_heavy;
        break;
      case 'Snow':
        return night_snowy;
        break;
      case 'Clear':
        return night;
        break;
      case 'Clouds':
        return night_cloudy;
        break;
      case 'default':
        return night_fog;
        break;
    }
  }
}
