import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Helmet } from "react-helmet";
import client from "./utils/apollo";
import AnimatedRoutes from "./templates/AnimatedRoutes";

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
        </Helmet>

        <Router>
          <AnimatedRoutes />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
