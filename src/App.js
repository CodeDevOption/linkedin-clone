
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Header, Login } from './components';
import Feed from './containers/feed/Feed';
import Sidebar from './containers/sidebar/Sidebar';
import Widgets from './containers/widgets/Widgets';
import { userSelector } from './Reducers/userSlice';
function App() {
  const user = useSelector(userSelector);
  return  user ? (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="app__body">
        <div className="app__body_continer">
              {/* Sidebar */}
              <Sidebar />
              {/* Feed */}
              <Feed />
              {/* Widgets */}
              <Widgets />
          </div>
      </div>
    </div>
  ): <Login />
}

export default App;
