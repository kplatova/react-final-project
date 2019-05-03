export const token = "my-token";

export const getMapData = element => ({
  container: element,
  style: "mapbox://styles/mapbox/streets-v9",
  center: [30.2656504, 59.8029126],
  zoom: 15
});

export const getLayerData = (id, coords) => ({
  id,
  type: "line",
  source: {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: coords
      }
    }
  },
  layout: {
    "line-join": "round",
    "line-cap": "round"
  },
  paint: {
    "line-color": "#009EAB",
    "line-width": 8
  }
});

export const getFlyToData = center => ({
  center,
  speed: 0.5
});
