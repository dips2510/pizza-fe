import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaContainer from './container/PizzaContainer/PizzaContainer';

import store from './store';


function App() {
  return (
    <Provider store={store}>
      <PizzaContainer />
    </Provider>  
    
  );
}

export default App;
