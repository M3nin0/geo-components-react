/*
 * This file is part of GEO-Components-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Components-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

import { MapContainer, TileLayer } from "react-leaflet";


export const GeospatialField = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
      <TileLayer
        attribution={"&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"}
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
    </MapContainer>
  );
};
