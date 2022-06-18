// Semantic UI React
import "semantic-ui-css/semantic.min.css";

// Semantic UI React (Datepickers)
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

// Leaflet
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// React Carousel
import "pure-react-carousel/dist/react-carousel.es.css";

// React lazy load image
import "react-lazy-load-image-component/src/effects/blur.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
