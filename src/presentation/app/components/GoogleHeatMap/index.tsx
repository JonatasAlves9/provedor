import {useState} from 'react';
import {GoogleMap, HeatmapLayer} from '@react-google-maps/api';

interface IProps {
  apiKey?: string;
}

export const GoogleHeatMap = ({apiKey}: IProps) => {
  const [data, setData] = useState(null);

  const center: google.maps.LatLngLiteral = {
    lat: 37.774546,
    lng: -122.433523,
  };

  const onClick = (e: google.maps.MapMouseEvent) => {
    console.log('onClick args: ', e);
  };

  const onMapLoad = () => {
    const data = [
      new google.maps.LatLng(37.782, -122.447),
      new google.maps.LatLng(37.782, -122.445),
      new google.maps.LatLng(37.782, -122.443),
      new google.maps.LatLng(37.782, -122.441),
      new google.maps.LatLng(37.782, -122.439),
      new google.maps.LatLng(37.782, -122.437),
      new google.maps.LatLng(37.782, -122.435),
      new google.maps.LatLng(37.785, -122.447),
      new google.maps.LatLng(37.785, -122.445),
      new google.maps.LatLng(37.785, -122.443),
      new google.maps.LatLng(37.785, -122.441),
      new google.maps.LatLng(37.785, -122.439),
      new google.maps.LatLng(37.785, -122.437),
      new google.maps.LatLng(37.785, -122.435),
    ];

    setData(data);
  };

  return (
    <>
      <GoogleMap
        id='heatmap-example'
        mapContainerStyle={{height: '400px', width: '100%', borderRadius: '15px'}}
        zoom={13}
        center={center}
        onClick={onClick}
        onLoad={() => onMapLoad()}
        options={{
          fullscreenControl: false,
          zoomControl: false,
        }}
      >
        {data && <HeatmapLayer data={data} />}
      </GoogleMap>
    </>
  );
};
