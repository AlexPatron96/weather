import React, { useState } from 'react';
import Mapweather from './Mapweather';


const WeatherInf = ({ infWeather }) => {
    console.log(infWeather.weather?.[0].icon);

    const [converterUni, setConverterUni] = useState(false)
    let lat = infWeather.coord?.lat
    let lon = infWeather.coord?.lon
    //console.log(lat, lon)+ ;

    const converter = () => {
        if (converterUni === false) {
            setConverterUni(true)
        } else {
            setConverterUni(!true)
        }
    }

    
    /* ============== ESTA PARTE SE PUEDE REALIZAR CON UN ARREGLO ALMACENADO EN UN JSON O JS  ==============*/
    /* PREFERI DEJARLO ALLI POR QUE NO CONOZCO TODOS LOS CLIMAS DISPONIBLES QUE CONTIENE EL API*/

    let temp = Math.round((infWeather.main?.temp) - 273)
    let tempImg = null
    if (temp < 5 ) {
        tempImg = 'fa-snowflake'
    } else if(temp < 15  ){
        tempImg = 'fa-temperature-low '
    }else if(temp < 25  ){
        tempImg = 'fa-temperature-half'
    }else if(temp < 50  ){
        tempImg = 'fa-temperature-high'}
        
        
    /*=======================================================================*/


    return (
        <div className='WeatherInf'>
            <h1>Weather App</h1>
            <h3 className=''>{infWeather.name} - {infWeather.sys?.country}</h3>
            <h3> Feels Like {converterUni ?
                ((Math.round(infWeather.main?.feels_like) - 273) * 9 / 5) + 32 + ' °F'
                : Math.round(infWeather.main?.feels_like) - 273 + ' °C'
            }

            </h3>
            <div className='WeatherInf-Cont'>
                <div className='imgWeatherAct'>
                    <img className='imgWeatherApi bx-burst' src={`https://openweathermap.org/img/wn/${infWeather.weather?.[0].icon}@4x.png`} alt="" />
                </div>
                <div className='WeatherInfAct'>
                    <h3>
                    <i className={`fa-solid ${tempImg} fa-2xl`}></i>
                    
                        {converterUni ?
                            (Math.round((infWeather.main?.temp) - 273) * 9 / 5) + 32 + ' °F'
                            : Math.round((infWeather.main?.temp) - 273) + ' °C'}
                    </h3>
                    <h3>weather state:
                        <span> {infWeather.weather?.[0].description}
                        </span>
                    </h3>
                    <h3>
                        <i className='bx bx-wind bx-xs'></i>
                        wind Speed:
                        <span> {infWeather.wind?.speed + '  m/seg'}</span>
                    </h3>
                    <h3>
                        <i className='bx bx-cloud bx-xs'></i>
                        cloud:
                        <span> {infWeather.clouds?.all}  %</span>
                    </h3>
                    <h3>
                        <i className='bx bxs-low-vision bx-xs' ></i>
                        Visibility:
                        <span>  {converterUni ?
                            ((infWeather.visibility / 1000) / 1.609).toFixed(2) + ' Mile'
                            : (infWeather.visibility / 1000).toFixed(1) + 'km'}</span>
                    </h3>
                    <h3>
                        <i className='bx bx-droplet bx-xs'></i>
                        Humidity: <span>  {infWeather.main?.humidity} % </span>
                    </h3>
                    <h3>
                        <i className='bx bx-cloud-snow bx-xs' ></i>
                        Rain:
                        <span>{infWeather.rain?.["1h"]} mm </span>
                    </h3>
                </div>
                <Mapweather lat={lat} lon={lon} />
            </div>
            <button className='bt-converter' onClick={converter} > Converter </button>
        </div>
    );
};

export default WeatherInf;