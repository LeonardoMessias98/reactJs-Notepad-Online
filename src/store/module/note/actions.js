export function saveFile(note){
  return {
    type:'SAVE_NOTE',
    note,
  }
}

export function saveLocal(note){
  return {
    type:'SAVE_LOCAL',
    note,
  }
}

export function deleteFile(id){
  return{
    type: 'DELETE_NOTE',
    id,
  }
}

export function deleteLocal(id){
  return {
    type:'DELETE_LOCAL',
    id,
  }
}