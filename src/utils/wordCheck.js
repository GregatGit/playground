
/*
  takes in a string
  - trims white space
  - check min length
  - can return upper or lower case
*/
const checkStr = str => {
  
  let word = str.trim()
  if(word.length < 3){
    
    return 'too small'
  }
  // if (todoNames.indexOf(word) !== -1){
  //   let message = `you already have ${word}`
  //   alert(message)
  //   setTodo('')
  //   return
  // }
  return word
}