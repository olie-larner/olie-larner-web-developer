import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Helmet } from 'react-helmet';
import client from './utils/apollo';
import AnimatedRoutes from './templates/AnimatedRoutes';

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Helmet>
					<link key="0" rel="preconnect" href="https://fonts.googleapis.com" />,
					<link
						key="1"
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						key="2"
						href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
						rel="stylesheet"
					/>
					<title>
						Freelance Web Developer | Front-end & Back-end | Responsive Design
					</title>
					<meta
						name="description"
						content="Hi, I'm Olie Larnwer, a skilled freelance web developer
						specializing in both front-end and back-end development. With 8
						years of experience, I have a strong foundation in HTML, CSS,
						JavaScript, and PHP, along with expertise in responsive design and
						modern web development frameworks. I am passionate about creating
						visually appealing and user-friendly websites that meet the unique
						requirements of my clients. Whether you need a simple landing page,
						an e-commerce platform, or a custom web application, I can deliver
						high-quality solutions tailored to your needs. Contact me today to
						discuss your project!"
					/>
					<meta
						name="keywords"
						content="freelance web developer, front-end developer, stroud freelance web developer, stroud web developer, back-end developer, responsive design, HTML, CSS, JavaScript, PHP, web development frameworks, user-friendly websites, e-commerce platform, custom web application"
					/>
					<meta name="robots" content="index, follow" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta charset="UTF-8" />
				</Helmet>

				<Router>
					<AnimatedRoutes />
				</Router>
			</div>
		</ApolloProvider>
	);
}

export default App;
