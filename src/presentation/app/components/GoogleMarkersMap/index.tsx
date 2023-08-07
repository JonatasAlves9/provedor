import {Col} from 'reactstrap';
import {FormikValues} from 'formik';
import {SelectInput} from 'adasi_components';
import {useEffect, useState, ReactNode} from 'react';
import {toAbsoluteUrl} from '@/presentation/config/helpers';
import {GoogleHeatMap} from '@/presentation/app/components/GoogleHeatMap';
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import {GoogleMarkersLegend} from '@/presentation/app/components/GoogleMarkersLegend';

export interface IMarkers {
  total: number;
  lat: number;
  lng: number;
  size: string;
  color: string;
  label: string;
}

interface IProps {
  apiKey: string;
  validation: FormikValues;
  markers: IMarkers[];
  children: ReactNode;
}

export const GoogleMarkersMap = ({apiKey, markers, validation, children}: IProps) => {
  const [previousCenter, setPreviousCenter] = useState({lat: -8.28, lng: -38.07});
  const [selectedCenter, setSelectedCenter] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedCenter(null);
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <>
      <LoadScript
        googleMapsApiKey={apiKey}
        mapIds={['map', 'heatmap-example']}
        libraries={['visualization']}
      >
        <div className='card mb-5'>
          <div className='card-header border-0'>
            <h3 className='card-title fw-bold text-dark'>Atividades em Andamento</h3>
          </div>
          <div className='card-body pt-0'>
            <Col md={6} className='mb-5'>
              <SelectInput
                options={[
                  {
                    value: '1',
                    label: 'Atividades em Andamento',
                  },
                  {
                    value: '2',
                    label: 'Atividades Finalizadas',
                  },
                  {
                    value: '3',
                    label: 'Atividades Agendadas',
                  },
                ]}
                isDark={false}
                defaultValue={{value: '1', label: 'Atividades em Andamento'}}
                inputId={'taskSituation'}
                isMulti={false}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
              />
            </Col>
            <GoogleMap
              center={previousCenter}
              mapContainerStyle={{height: '400px', width: '100%', borderRadius: '15px'}}
              zoom={7}
              options={{
                fullscreenControl: false,
                zoomControl: false,
              }}
            >
              {markers.map((marker, idx) => {
                const markerOptions = {
                  icon: {
                    url: toAbsoluteUrl(`/media/icons/duotune/maps/map011-${marker.color}.svg`),
                  },
                };

                return (
                  <>
                    <Marker
                      key={idx}
                      position={{lat: marker.lat, lng: marker.lng}}
                      onClick={() => {
                        setPreviousCenter({lat: marker.lat, lng: marker.lng});
                        setSelectedCenter({lat: marker.lat, lng: marker.lng});
                      }}
                      options={markerOptions}
                    />
                    {selectedCenter && (
                      <InfoWindow
                        onCloseClick={() => setSelectedCenter(null)}
                        position={{lat: selectedCenter.lat, lng: selectedCenter.lng}}
                      >
                        {children}
                        {/* <InfoWindowCard
                          task={'Tarefa Tal'}
                          course={'Curso Tal'}
                          finishedAtDate={'17/07/2023'}
                          finishedAtHour={'15:45'}
                          location={'Colégio da Dona Maria do Interior'}
                          scheduleDate={'24/02/2023'}
                          scheduleHour={'15:45'}
                          studentName={'Zezin da Silva Junior II'}
                        /> */}
                      </InfoWindow>
                    )}
                  </>
                );
              })}
            </GoogleMap>
            <Col md={12} className='d-flex justify-content-center mb-5'>
              <GoogleMarkersLegend />
            </Col>
          </div>
        </div>

        <div className='card mb-5'>
          <div className='card-header border-0'>
            <h3 className='card-title fw-bold text-dark'>Mapa de Calor</h3>
          </div>
          <div className='card-body pt-0'>
            <Col md={6} className='mb-5'>
              <SelectInput
                options={[
                  {
                    value: '1',
                    label: 'Atividades em Andamento',
                  },
                  {
                    value: '2',
                    label: 'Atividades Finalizadas',
                  },
                  {
                    value: '3',
                    label: 'Atividades Agendadas',
                  },
                ]}
                defaultValue={{value: '1', label: 'Atividades em Andamento'}}
                isDark={false}
                inputId={'taskSituation'}
                isMulti={false}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
              />
            </Col>
            <GoogleHeatMap />
          </div>
        </div>
      </LoadScript>
    </>
  );
};
