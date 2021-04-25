import { Provider } from 'react-redux';
import store from './redux/createStore';
import InputSection from './components/InputSection';
import NotesSection from './components/NotesSection';
import './App.css'
function App() {
  return (
    <Provider store={store}>
     <div className="container">
        <h1>My Notes</h1>
        <InputSection />
        <div className="line"></div>
        <NotesSection />
      </div>
    </Provider>
  );
}

export default App;
