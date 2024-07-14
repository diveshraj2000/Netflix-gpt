import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import Appstore from './Utils/AppStore';
function App() {
  return (
    <Provider store={Appstore}>
      <Body />
    </Provider>
  );
}

export default App;
