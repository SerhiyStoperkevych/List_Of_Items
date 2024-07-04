export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, action.payload];
      case 'DELETE_ITEM':
        return state.filter(item => item.id !== action.payload);
      default:
        throw new Error('Unhandled action type');
    }
  };
  
  export const initialState = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' },
  ];
  
