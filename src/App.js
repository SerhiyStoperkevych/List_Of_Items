import React, { useContext, useState } from 'react';
import { AppContext, AppProvider } from './AppContext';
import ItemComponent from './components/ItemComponent';
import './App.scss';

const App = () => {
  const { state, dispatch } = useContext(AppContext);
  const [ nam , setName ] = useState('');
  const [ desc , setDesc ] = useState('');

  const handleAdd = () => {
    const newItem = {
      id: state.length + 1,
      name: nam,
      description: desc
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  return (
    <div className='whole'>
        <h1>List of Items</h1>
        <input 
          className='name'
          placeholder='Name'
          value={nam}
          onChange={(e) => setName(e.target.value)}
          name='Name'
          />
        <input
          type='search'
          className='description'
          placeholder='Description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          name='Description'
          />
        <button 
        className='addButton'
        onClick={handleAdd}>Add Item</button>
        {state.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

const WrappedApp = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default WrappedApp;
