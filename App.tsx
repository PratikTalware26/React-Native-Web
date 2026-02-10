import { RestaurantsContextProvider } from './src/services/restaurents/mock/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigation';

function App() {
  return (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Navigation />
      </RestaurantsContextProvider>
    </LocationContextProvider>
  );
}

export default App;
