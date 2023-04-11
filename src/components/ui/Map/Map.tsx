import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api';
import { Error } from '@/components/ui';

import { MapProps } from './Map.interface';
import * as Styled from './Map.styled';

export const Map = (props: MapProps) => (
	<Styled.Container>
		{process.env.NEXT_PUBLIC_MAP_API_KEY ? (
			<LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}>
				<GoogleMap
					options={{ mapTypeControl: false, streetViewControl: false }}
					zoom={18}
					{...props}
				>
					{props.center && <MarkerF position={props.center} />}
				</GoogleMap>
			</LoadScriptNext>
		) : (
			<Error />
		)}
	</Styled.Container>
);
