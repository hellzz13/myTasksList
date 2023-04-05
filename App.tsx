import React from 'react';
import {TaskProvider} from './src/context/TasksContexts';
import {Home} from './src/screens/Home';

const App = () => {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
};

export default App;
