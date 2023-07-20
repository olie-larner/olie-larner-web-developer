import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import classNames from 'classnames';

const MusicSection = (music) => {
	const [headerVis, setHeaderVis] = useState(false);
	const [videoVis, setVideoVis] = useState(false);

	const [header, headerInView] = useIntersectionObserver({
		threshold: 0.6,
		root: null,
	});
	const [video, videoInView] = useIntersectionObserver({
		threshold: 0.5,
		root: null,
	});

	useEffect(() => {
		if (headerInView?.isIntersecting && !headerVis) {
			setHeaderVis(true);
		}
		if (videoInView?.isIntersecting && !videoVis) {
			setVideoVis(true);
		}
	});

	return (
		<div
			className={classNames('w-full pt-20 pb-60 transition-all duration-1000')}
		>
			<div className="w-full min-h-screen">
				<div className="w-10/12 pt-10 mx-auto ">
					<h3
						ref={header}
						className={classNames(
							'pb-16 text-7xl relative font-playfair transition-all delay-300 duration-700',
							{
								'opacity-0 top-14': !headerVis,
							},
							{
								'opacity-100 top-0': headerVis,
							}
						)}
					>
						Latest Mix
					</h3>
				</div>
				<div
					className={classNames(
						'flex flex-col w-10/12 mx-auto md:flex-row md:items-center relative transition-all delay-1000 duration-700',
						{
							'opacity-0 top-14': !videoVis,
						},
						{
							'opacity-100 top-0': videoVis,
						}
					)}
				>
					<div className="w-full mb-16 md:w-1/2 md:mb-0">
						<p className="w-full text-xl italic leading-10 font-playfair md:w-2/3">
							Every now and again I'll get around to recording a mix. I can't
							promise a new one each week, month or year, but I give my personal
							guarantee each one will be of the highest quality!
						</p>
					</div>
					<div
						ref={video}
						className={classNames(
							'w-full md:w-1/2 relative transition-all duration-700'
						)}
					>
						<ReactPlayer url={music.music.youtubeMix} width={'100%'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MusicSection;
