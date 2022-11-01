import React from 'react';

const Mapweather = ({lat,lon}) => {
    //console.log(lat);
    return (
        <div className='mapweather'>
            <a className='mapgoogle' href={`https://www.google.com/maps/@${lat},${lon},14z`} target="_blank">Google Map</a>
            <a className='mapweather' href= {`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=radar&lat=${lat}&lon=${lon}&zoom=9`} target="_blank">View Map Weather</a> 
        </div>
    );
};

export default Mapweather;