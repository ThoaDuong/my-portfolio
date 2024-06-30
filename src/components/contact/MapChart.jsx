import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
    return (
        <ComposableMap style={{ width: "100%", height: "100%" }}
            projectionConfig={{
                // center: [20, 10],
                center: [70, 15],
                scale: 300
            }}
        >
            <Geographies 
                geography="/features.json"
                fill="#1c1c4d"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                ))
                }
            </Geographies>
            <Annotation
                subject={[107, 1609]}
                dx={-80} dy={45}
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text x="30" y="12" textAnchor="end" alignmentBaseline="middle" fill="white">
                {"I'm from Vietnam."}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default MapChart;
