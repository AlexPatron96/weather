import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import LoaderApi from './components/LoaderApi'
import WeatherInf from './components/WeatherInf'

function App() {

    const [count, setCount] = useState(0)
    const [infWeather, setInfWeather] = useState({})
    const [loader, setLoader] = useState(false)
    let lat = ''
    let lon = ''
    

    useEffect(() => {
        setLoader(true)
        const APIkey = `e98127907ef869ef98ba2eeaf4dde1ea`
        function success(pos) {
            const crd = pos.coords
            lat = crd.latitude
            lon = crd.longitude
            console.log(lat, lon);
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`).
            then(res => setInfWeather(res.data))
        }
        navigator.geolocation.getCurrentPosition(success)
        setTimeout(() => {
            setLoader(false)
        }, 1000);
        
    }, [])
    //console.log(infWeather);

    return (
        <div className="App">
            {loader && <LoaderApi/>}
            <WeatherInf infWeather={infWeather}/>
            <aside>This page was created by BossDesign</aside>
        </div>
    )
}

export default App
