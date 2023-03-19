import React, { useEffect, useRef, useState } from 'react';
import st from './CrosswordPage.module.css'
import MButtonForm from '../../UI-Components/MButtonForm/MButtonForm'
import time from './Images/time.png'
import place from './Images/place.png'
import award from './Images/award.png'
import mapboxgl from 'mapbox-gl';
import {GET_REGION} from 'mapbox-gl'







const CrosswordPage = () => {

    const useFetch = () => {
       
        const [data, setData] = useState(null)
        
        useEffect(() => {
          fetch('https://our-api.com/polygon')
            .then(response => response.json())
            .then(setData)
            .catch(e => {
              console.error(e)
            })
        }, [setData])
        
        return { data }
      }
      
      const BaseMap = () => {
        // Use the hook to fetch data
    const { data } = useFetch(GET_REGION);
    // Map instance
    const map = useRef(null);
        // DOM element
        const mapContainer = useRef(null);
        
        // Main logic - init the map and add the event
        useEffect(() => {
          if (map.current) {
            return; // initialize map only once
          }
      
          mapboxgl.accessToken = 'pk.eyJ1IjoibGFlc2lhIiwiYSI6ImNsZmQxeDAybTBxNXMzeXBnaXM5NXFzdm8ifQ.PUHgx-hDuKjulOhRWlD8sQ';
          map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/laesia/clfd20gds00lj01moej8avfmb', // style URL (it's Mapbox's core style)
            center: [-68.137343, 45.137451], // starting position
            zoom: 5 // starting zoom
          });
      
          // Handle event
          map.current.on('load', () => {
            const sourceId = 'source-region'
      
            // Add a data source containing GeoJSON data
            map.addSource(sourceId, {
              'type': 'geojson',
              'data': data.region // our data from Apollo
            });
        
            // Add a new layer to visualize the polygon
            
          });
        });
        return <div ref={mapContainer} className={st.map}></div>
      }

    return (
        <div className=''>
            <BaseMap/>
            <section className={st.interface}>
                <div className={st.interface__container}>
                    <div className={st.interface__block}>
                        <div className={st.interface__item}>
                            <img src={award} alt="Score" className={st.interface__icon} />
                            <div className={st.interface__score}>2700</div>
                        </div>
                    </div>
                    <div className={st.interface__block}>
                        <div className={st.interface__item}>
                            <img src={place} alt="Place" className={st.interface__icon} />
                            <div className={st.interface__text}>Turkey</div>
                        </div>
                        <div className={st.interface__item}>
                            <img src={time} alt="Time" className={st.interface__icon} />
                            <div className={st.interface__text}>12:02</div>
                        </div>
                    </div>
                    <div className={st.interface__block}>
                        <p className={st.interface__paragraph}>
                            Необходимо выбрать на карте правильный географический объект из числа предложенных. Число попыток ограничено.
                        </p>
                    </div>
                </div>
                <div className={st.interface__containerNew}>
                    <div className={st.interface__counter}>
                        <div className={st.interface__current}>1 / </div>
                        <div className={st.interface__total}>15</div>
                    </div>
                    <MButtonForm>ПРОПУСТИТЬ</MButtonForm>
                </div>
            </section>
        </div>
    );
};

export default CrosswordPage;
