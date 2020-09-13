import React from "react";
import styles from './map.module.css';
import {Map as LeafletMap, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Circle, Popup} from 'react-leaflet';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {latLngBounds, latLng} from 'leaflet';

function Map() {
    let southWest = latLng(26.7194029811,88.8142484883)
    let northEast = latLng(28.2964385035, 92.1037117859)
    let bounds = latLngBounds(southWest, northEast)
    return (
        <div className={styles.mapL}>
            <LeafletMap
                className={styles.leafletContainer}
                center={[27.4712, 89.6339]}
                zoom={14}
                minZoom={9}
                maxZoom={20}
                maxBounds={bounds}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/">OpenStreetMap</a> contributors'/>
                <Circle
                    center={[27.4712, 89.6339]}
                    fillOpacity={0.8}
                    color="blue"
                    fillColor="blue"
                    radius={50}>
                    <Popup className={styles.popUp}>
                        <div className={styles.info__container}>
                            <div className={styles.info__eventName}>Grocery</div>
                            <div className={styles.info__place}>Location: Thimphu, Doebum Lam
                            <p>Requests: I need Pasta</p>
                            </div>
                            
                            <Link to="/register">
                                <Button className={styles.volunteerBtn}>
                                    volunteer
                                </Button>
                            </Link>
                        </div>
                    </Popup>
                </Circle>
            </LeafletMap>
        </div>
    );
}

export default Map;