import './App.css';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import CountDisplay from './components/CountDisplay';
import CountButtons from './components/CountButtons';
import LoginComponent from './components/LoginComponent';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <LoginComponent></LoginComponent>
      <CountDisplay></CountDisplay>
      <CountDisplay></CountDisplay>
      <CountDisplay></CountDisplay>
      <CountButtons></CountButtons>
      <CountButtons></CountButtons>
    </div>

    </Provider>
  );
}

export default App;
