const token = "bda3f1a71e4bfdedb79be12107b87246";
const url = "https://api.openweathermap.org/data/2.5/weather";
const cnt = "7";
const responseConf = async (response: any) => {
  if (!response.ok) {
    const message = `An error has ocurred: ${response.status}`;
    throw new Error(message);
  }

  const weather = await response.json();
  return weather;
};
export const getWeatherByCityName = async (city: string) => {
  if (!city) {
    throw new Error("You need to provide city");
  }
  const response = await fetch(`${url}?q=${city}&APPID=${token}`);

  return responseConf(response);
};

export const getWeatherByCityID = async (id: string) => {
  if (!id) {
    throw new Error("You need to provide id");
  }
  const response = await fetch(`${url}?id=${id}&APPID=${token}`);

  return responseConf(response);
};

//example: api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}
export const getWeatherByZip = async (zip: number, country: string) => {
  if (!zip && !country) {
    throw new Error("You need to provide zip and country");
  }
  const response = await fetch(`${url}?zip=${zip},${country}&APPID=${token}`);

  return responseConf(response);
};

export const forecasthourly = async (lat: string, lon: string) => {
  if (!lat && !lon) {
    throw new Error("You need to provide lat and lon");
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,minutely&appid=${token}`
  );
  return responseConf(response);
};

export const forecastFor7days = async (lat: string, lon: string) => {
  if (!lat && !lon) {
    throw new Error("You need to provide lat and lon");
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${token}`
  );
  return responseConf(response);
};
