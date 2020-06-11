export default function note(state =[], action){
  switch (action.type){
    case 'SAVE_NOTE':

      let noteIndex = state.findIndex(note => note.id === action.note.id);
      
      if(Number(noteIndex) >= 0){
        state.splice(noteIndex,1);
        return [ ...state, action.note];
      }

      return[ ...state, action.note];
    
    case 'DELETE_NOTE':
      const idIndex = state.findIndex(note => note.id === action.id);

      if(Number(idIndex) >= 0){
        state.splice(idIndex,1);
        return [ ...state];
      }

    default:
      return state;
  }
}