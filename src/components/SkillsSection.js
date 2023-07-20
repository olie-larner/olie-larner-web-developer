import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useIntersectionObserver } from '@uidotdev/usehooks';

const SkillsSection = (data) => {
	const [logoName, setLogoName] = useState(undefined);
	const [skillsVis, setSkillsVis] = useState(false);
	const showTitle = (logoNo) => {
		setLogoName(logoNo);
	};

	const [skills, skillsInView] = useIntersectionObserver({
		threshold: 1,
		root: null,
	});

	useEffect(() => {
		if (skillsInView?.isIntersecting && !skillsVis) {
			setSkillsVis(true);
		}
	});

	return (
		<>
			{data.skillSet.map((skill, key) => {
				return (
					<div id="skills" className="w-full py-32 bg-white" key={key}>
						<div className="w-11/12 mx-auto md:w-10/12">
							<div id="trigger" />

							<div className="w-full">
								<div className="w-11/12 mx-auto md:w-full">
									<h3
										className={classNames(
											'text-7xl pb-10 cursor-pointer text-gray-800 font-playfair transition-transform duration-700 delay-200'
										)}
									>
										{skill.skillSetTitle}
									</h3>
								</div>

								<div ref={skills} className="flex flex-row flex-wrap w-full">
									{skill.skillSetLogos &&
										skill.skillSetLogos.map((icon, key) => {
											const i = key * 200;
											const logoNo = key;

											return (
												<div
													key={key}
													className={classNames(
														'flex justify-center w-1/3 md:w-1/4 my-7 transition-all duration-700 relative',
														{
															'opacity-0 top-14': !skillsVis,
														},
														{
															'opacity-100 top-0': skillsVis,
														},
														{
															[`delay-[` + i + `ms]`]: true,
														}
													)}
													onMouseEnter={() => showTitle(logoNo)}
													onMouseLeave={() => setLogoName(undefined)}
												>
													<img
														src={icon.skillLogo.sourceUrl}
														alt={icon.skillLogo.altText}
														key={key}
														className={classNames(
															'h-[90px] w-[90px] md:h-[150px] md:w-[150px] transition-all duration-700 relative',
															{
																'scale-100 opacity-100': logoName !== logoNo,
															},
															{
																'scale-105 opacity-30': logoName === logoNo,
															}
														)}
													/>
													<div
														className={classNames(
															'absolute font-playfair text-3xl font-bold transition-all duration-800',
															{
																'opacity-0 top-0': logoName !== logoNo,
															},
															{
																'opacity-100 top-[50px]': logoName === logoNo,
															}
														)}
													>
														{icon.skillName}
													</div>
												</div>
											);
										})}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default SkillsSection;
