import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import classNames from 'classnames';

const ContactMe = () => {
	const [contactVis, setContactVis] = useState(false);

	const [contact, contactInView] = useIntersectionObserver({
		threshold: 0.5,
		root: null,
	});

	useEffect(() => {
		if (!contactVis && contactInView?.isIntersecting) {
			setContactVis(true);
		}
	});
	console.log(contactVis);
	return (
		<div ref={contact} id="contact" className="w-full pb-32 ">
			<div className="flex flex-col items-center w-10/12 mx-auto">
				<h3
					className={classNames(
						'text-7xl font-playfair text-center relative text-gray-800 transition-all delay-300 duration-700',
						{ 'opacity-0 top-24': !contactVis },
						{ 'opacity-100 top-0': contactVis }
					)}
				>
					That's about it...
				</h3>

				<p
					className={classNames(
						'font-playfair text-center w-11/12 md:w-1/2 py-10 text-xl md:text-2xl text-gray-800 relative transition-all delay-500 duration-700',
						{ 'opacity-0 top-24': !contactVis },
						{ 'opacity-100 top-0': contactVis }
					)}
				>
					If you want to get in contact about work, have any crypto tips, or
					just wanna chat, then hit me up on:
				</p>
				<a
					className={classNames(
						'italic text-2xl md:text-4xl font-playfair text-gray-800 relative transition-all delay-700 duration-700',
						{ 'opacity-0 top-24': !contactVis },
						{ 'opacity-100 top-0': contactVis }
					)}
					href="mailto:info@olielarner.com"
				>
					info@olielarner.com
				</a>
			</div>
		</div>
	);
};

export default ContactMe;
