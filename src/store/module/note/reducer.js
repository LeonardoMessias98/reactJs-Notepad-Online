export default function note(state =[], action){
  switch (action.type){
    case 'SAVE_NOTE':
      console.log(state, action.note)
      
      let noteIndex = state.findIndex(note => note.id === action.note.id)

      console.log(noteIndex)
      
      if(Number(noteIndex) >= 0){
        state.splice(noteIndex,1);
        return [ ...state, action.note];
      }

      return[ ...state, action.note];
    default:
      return state;
  }
}