import { GoogleMapProps } from '@react-google-maps/api';

export interface MapProps extends Pick<GoogleMapProps, 'center' | 'mapContainerStyle'> {}
