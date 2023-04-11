import styled from 'styled-components';

export const Lesson = styled.div`
	${({ theme }) => theme.classes.card};
	padding: ${({ theme }) => theme.spacing(5)};

	// styles for react-lite-youtube-embed package
	.yt-lite {
		margin-top: auto;
		width: 100%;
		background-color: #000;
		position: relative;
		display: block;
		contain: content;
		background-position: center center;
		background-size: cover;
		cursor: pointer;
	}

	/* gradient */
	.yt-lite::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
		background-position: top;
		background-repeat: repeat-x;
		height: 60px;
		padding-bottom: 50px;
		width: 100%;
		transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
	}

	.yt-lite::after {
		content: '';
		display: block;
		padding-bottom: calc(100% / (16 / 9));
	}
	.yt-lite > iframe {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	/* play button */
	.yt-lite > .lty-playbtn {
		width: 70px;
		height: 46px;
		background-color: #212121;
		z-index: 1;
		opacity: 0.8;
		border-radius: 14%; /* TODO: Consider replacing this with YT's actual svg. Eh. */
		transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
	}
	.yt-lite:hover > .lty-playbtn {
		background-color: #f00;
		opacity: 1;
	}
	/* play button triangle */
	.yt-lite > .lty-playbtn:before {
		content: '';
		border-style: solid;
		border-width: 11px 0 11px 19px;
		border-color: transparent transparent transparent #fff;
	}

	.yt-lite > .lty-playbtn,
	.yt-lite > .lty-playbtn:before {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
	}

	/* Post-click styles */
	.yt-lite.lyt-activated {
		cursor: unset;
	}
	.yt-lite.lyt-activated::before,
	.yt-lite.lyt-activated > .lty-playbtn {
		opacity: 0;
		pointer-events: none;
	}
`;

export const Description = styled.p`
	${({ theme }) => theme.typography['16L']};
	color: ${({ theme }) => theme.palette.lightGray};
	margin-top: ${({ theme }) => theme.spacing(3)};
	margin-bottom: ${({ theme }) => theme.spacing(6)};
`;
