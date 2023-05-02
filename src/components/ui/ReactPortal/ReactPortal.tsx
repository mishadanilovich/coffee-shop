import { useLayoutEffect, useState } from 'react';
import { ReactPortalProps } from './ReactPortal.interface';
import { createPortal } from 'react-dom';

const createWrapperAndAppendToBody = (wrapperId: string) => {
	if (!document) return null;
	const wrapperElement = document.createElement('div');
	wrapperElement.setAttribute('id', wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
};

export const ReactPortal = ({ wrapperId, children }: ReactPortalProps) => {
	const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);
		let systemCreated = false;

		if (!element) {
			systemCreated = true;
			element = createWrapperAndAppendToBody(wrapperId);
		}
		setWrapperElement(element!);

		return () => {
			if (systemCreated && element?.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [wrapperId]);

	if (!wrapperElement) return null;

	return createPortal(children, wrapperElement);
};
