import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// icons
import { 
    WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog, WiStrongWind, WiHail, 
    WiThunderstorm, WiTornado, WiHurricane, WiSmoke, WiDayCloudy, WiNightCloudy, 
    WiNightClear, WiDayHaze, WiDust, WiSandstorm, WiCloudyGusts, WiCloudyWindy, 
    WiShowers, WiSnowflakeCold, WiSleet, WiHot, WiDayStormShowers, WiNightStormShowers,
    WiDayRainMix, WiDayRainWind, WiDaySnowWind, WiDaySleetStorm, WiNightRainMix,
    WiNightRainWind, WiNightSnowWind, WiNightSleetStorm,
} from 'react-icons/wi'; 


const HomePage = () => {
    const weather = useSelector((state) => state.weather);
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState('');

    const getWeather = async (loc) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            dispatch({ type: 'SET_WEATHER', payload: data });
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('City not found! Please enter a valid city name.');
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (!location || typeof location !== 'string') {
            alert('Please enter a valid location');
            return;
        }
        setLocation(location);
        getWeather(location);
        setWeatherData(location);
    };
    
    
      

    return (
        <>
        {/* <Navbar /> */}
        <div className="mx-auto w-screen min-h-screen p-4 bg-[#D6DAC8] flex flex-col">
            
            <Helmet>
                <title>{location ? `${location} Weather` : 'Weather App'}</title>
                <meta name="description" content={`Current weather in ${location}`} />
            </Helmet>
            
            <motion.h1 
                className="text-4xl font-bold text-[#7AA2E3] text-center mt-1"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Current Weather
            </motion.h1>
            {/* w-3/4 lg:w-1/2 xl:w-1/3 mx-auto */}
            <motion.form 
                onSubmit={handleSearch} 
                className="text-center p-4 border-2 m-8 bg-white bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center w-3/4 lg:w-1/2 xl:w-1/3 mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <input 
                    className="border-0 bg-[#D6DAC8] rounded-lg p-2 w-1/2 mr-2 placeholder-black"
                    type="text" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder="location"  
                />
                <button 
                    className="p-2 bg-[#7AA2E3] text-white rounded-lg" 
                    type="submit"
                >
                    Search
                </button>
            </motion.form>

            {/* Weather Card */}
            <div className="flex flex-row justify-center">
                {weather && weather.main && (
                    <div className="col-start-2">
                        <motion.div className="bg-[#6AD4DD] p-4 rounded-lg shadow-lg w-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <h2 className="text-3xl font-bold text-center text-[#F8F6E3]">City: {weatherData}</h2>
                            <h3 className="text-[#F8F6E3] text-xl text-center font-bold">{weather.weather[0].description}</h3>
                            <div className="flex items-center justify-center mt-4">
                                {weather.weather[0].main === 'Clear' && <WiDaySunny size={32} />}
                                {weather.weather[0].main === 'Clouds' && <WiCloudy size={32} />}
                                {weather.weather[0].main === 'Rain' && <WiRain size={32} />}
                                {weather.weather[0].main === 'Snow' && <WiSnow size={32} />}
                                {weather.weather[0].main === 'Fog' && <WiFog size={32} />}
                                {weather.weather[0].main === 'Wind' && <WiStrongWind size={32} />}
                                {weather.weather[0].main === 'Hail' && <WiHail size={32} />}
                                {weather.weather[0].main === 'Thunderstorm' && <WiThunderstorm size={32} />}
                                {weather.weather[0].main === 'Tornado' && <WiTornado size={32} />}
                                {weather.weather[0].main === 'Hurricane' && <WiHurricane size={32} />}
                                {weather.weather[0].main === 'Smoke' && <WiSmoke size={32} />}
                                {weather.weather[0].main === 'Haze' && <WiDayHaze size={32} />}
                                {weather.weather[0].main === 'Dust' && <WiDust size={32} />}
                                {weather.weather[0].main === 'Sandstorm' && <WiSandstorm size={32} />}
                                {weather.weather[0].main === 'CloudyGusts' && <WiCloudyGusts size={32} />}
                                {weather.weather[0].main === 'CloudyWindy' && <WiCloudyWindy size={32} />}
                                {weather.weather[0].main === 'Showers' && <WiShowers size={32} />}
                                {weather.weather[0].main === 'SnowflakeCold' && <WiSnowflakeCold size={32} />}
                                {weather.weather[0].main === 'Sleet' && <WiSleet size={32} />}
                                {weather.weather[0].main === 'Hot' && <WiHot size={32} />}
                                {weather.weather[0].main === 'DayStormShowers' && <WiDayStormShowers size={32} />}
                                {weather.weather[0].main === 'NightStormShowers' && <WiNightStormShowers size={32} />}
                                {weather.weather[0].main === 'DayCloudy' && <WiDayCloudy size={32} />}
                                {weather.weather[0].main === 'NightCloudy' && <WiNightCloudy size={32} />}
                                {weather.weather[0].main === 'NightClear' && <WiNightClear size={32} />}
                                {weather.weather[0].main === 'Mist' && <WiFog size={32} />}
                                {weather.weather[0].main === 'DayRainMix' && <WiDayRainMix size={32} />}
                                {weather.weather[0].main === 'DayRainWind' && <WiDayRainWind size={32} />}
                                {weather.weather[0].main === 'DaySnowWind' && <WiDaySnowWind size={32} />}
                                {weather.weather[0].main === 'DaySleetStorm' && <WiDaySleetStorm size={32} />}
                                {weather.weather[0].main === 'NightRainMix' && <WiNightRainMix size={32} />}
                                {weather.weather[0].main === 'NightRainWind' && <WiNightRainWind size={32} />}
                                {weather.weather[0].main === 'NightSnowWind' && <WiNightSnowWind size={32} />}
                                {weather.weather[0].main === 'NightSleetStorm' && <WiNightSleetStorm size={32} />}

                            </div>
                        </motion.div>
                    </div>
                )}
            </div>

            {/* Temperature, Wind Speed, Humidity */}
            <div className="grid sm:grid-cols-1 pl-2 pr-2 md:grid-cols-2 gap-4 mt-4 mb-4">
                {weather && weather.main && (
                    <>
                        {/* For Temperature */}
                        <motion.div className="bg-white p-4 rounded-lg shadow-lg mx-auto" style={{width: "315px", height: "70px"}}
                                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} 
                                transition={{delay: 1, type: "spring", stiffness: 260, damping: 20}}>
                        <p className="text-[#7AA2E3] text-2xl font-bold ml-2">Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
                        
                        </motion.div>
                        {/* For Wind Speed */}
                        <motion.div className="bg-white p-4 rounded-lg shadow-lg mx-auto" style={{width: "315px", height: "70px"}}
                                    initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} 
                                    transition={{delay: 1.2, type: "spring", stiffness: 260, damping: 20}}>
                            <p className="text-[#7AA2E3] text-2xl font-bold ml-2">Wind Speed: {weather.wind.speed} m/s</p>
                            
                        </motion.div>
                        {/* For Humidity */}
                        <motion.div className="bg-white p-4 rounded-lg shadow-lg mx-auto" style={{width: "315px", height: "70px"}}
                                    initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} 
                                    transition={{delay: 1.4, type: "spring", stiffness: 260, damping: 20}}>
                            <p className="text-[#7AA2E3] text-2xl font-bold ml-2">Humidity: {weather.main.humidity}%</p>

                        </motion.div>
                    {/* For Feels Like */}
                        <motion.div className="bg-white p-4 rounded-lg shadow-lg mx-auto" style={{width: "315px", height: "70px"}}
                                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} 
                                transition={{delay: 1.6, type: "spring", stiffness: 260, damping: 20}}>
                        <p className="text-[#7AA2E3] text-2xl font-bold ml-2">Feels like: {(weather.main.feels_like - 273.15).toFixed(2)}°C</p>
                        
                        </motion.div>
                        {/* For Pressure */}
                        <motion.div className="bg-white p-4 rounded-lg shadow-lg mx-auto" style={{width: "315px", height: "70px"}} 
                                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} 
                                transition={{delay: 1.8, type: "spring", stiffness: 260, damping: 20}}>
                            <p className="text-[#7AA2E3] text-2xl font-bold ml-2">Pressure: {weather.main.pressure} hPa</p>
                            
                        </motion.div>
                        {/* For Visisibility */}
                        <motion.div className="bg-white p-4 rounded-lg shadow-lg mx-auto" style={{width: "315px", height: "70px"}}
                                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} 
                                transition={{delay: 2, type: "spring", stiffness: 260, damping: 20}}>
                            <p className="text-[#7AA2E3] text-2xl font-bold ml-2">Visibility: {weather.visibility} m</p>

                        </motion.div>
                    </>
                )}
            </div>
            
        </div>
        </>
    );
}

export default HomePage;
