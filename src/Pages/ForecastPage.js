import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';    

function getTemperatureIcon(temp) {
    return temp > 20 ? faTemperatureHigh : faTemperatureLow;
}
const HomePage = () => {
    const weather = useSelector((state) => state.weather);
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState('');

    const getWeather = async (loc) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const dailyData = aggregateDailyData(data.list);
            dispatch({ type: 'SET_WEATHER', payload: dailyData });
        } catch (error) {
            alert('City not found! Please enter a valid city name.');
        }
    }

    const aggregateDailyData = (list) => {
        const dailyData = [];
        for (let i = 0; i < list.length; i += 8) {
            const dayData = list[i];
            dailyData.push({
                date: format(new Date(dayData.dt * 1000), 'EEEE'),
                temp: dayData.main.temp,
                weather: dayData.weather[0].main,
                icon: dayData.weather[0].icon,
            });
        }
        return dailyData;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (!location || typeof location !== 'string') {
            alert('Please enter a valid location');
            return;
        }
        getWeather(location);
        setWeatherData(location);
    };
    
    
      

    return (
        <>
        {/* <Navbar /> */}
        <div className="mx-auto w-screen min-h-screen p-4 flex flex-col">
            
            <Helmet>
                <title>{location ? `${location} Weather` : 'Weather App'}</title>
                <meta name="description" content={`Current weather in ${location}`} />
            </Helmet>
            
            <motion.h1 
                className="text-4xl font-bold text-[#135D66] text-center mt-1"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Forecast Page
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
                    className="border-0 bg-[#D6DAC8] rounded-lg p-2 w-1/2 mr-2 placeholder-black placeholder-bold"
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
                {weather && (
                    <div className="col-start-2">
                        <motion.div className="bg-[#6AD4DD] p-2 rounded-lg shadow-lg w-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <h2 className="text-3xl font-bold text-center text-[#F8F6E3]">City: {weatherData}</h2>
                        </motion.div>
                    </div>
                )}
            </div>

            <div className="grid sm:grid-cols-1 pl-2 pr-2 md:grid-cols-2 gap-4 mt-4 mb-4">
                {Array.isArray(weather) && weather.map((day, index) => (
                    <motion.div key={index} className="bg-white p-4 rounded-lg shadow-lg mx-auto" style={{width: "200px", height: "100px"}}
                        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} 
                        transition={{delay: index * 0.2 + 1, type: "spring", stiffness: 260, damping: 20}}>
                        <h2 className="text-[#7AA2E3] text-2xl font-bold ml-2">{day.date}</h2>
                        <p className="text-[#7AA2E3] font-bold ml-2"><FontAwesomeIcon icon={getTemperatureIcon((day.temp- 273.15).toFixed(2))} /> {(day.temp- 273.15).toFixed(2)}°C</p>
                        <p className="text-[#7AA2E3] font-bold ml-2 flex items-center">
                            <img src={`http://openweathermap.org/img/w/${day.icon}.png`} alt="Weather icon" style={{width: '30px', height: '20px', marginRight: '10px'}} /> {day.weather}
                        </p>
                </motion.div>
                ))}
            </div>

        </div>
        </>
    );
}

export default HomePage;
