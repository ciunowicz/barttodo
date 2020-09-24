
const LoadLoc = () => {
    let todosData;
    
    if (typeof(Storage) !== "undefined") {
   
      if (localStorage.getItem("myTodo")) {
             todosData = JSON.parse(localStorage.getItem("myTodo"));
      } 
      
    }

    return todosData;
}

const SaveLoc = (data) => {
  if (typeof(Storage) !== "undefined") 
         {
             localStorage.setItem("myTodo", JSON.stringify(data));
         }
         else  { 
                 alert("Your browser does not support localStorage");
               }

}




export {SaveLoc, LoadLoc};