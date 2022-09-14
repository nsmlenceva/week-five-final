import './App.css';
import { data } from './data';
import { useState } from 'react';


function App() {
  const [present, setPresent] = useState(data);
  
  const removePresent = (id) => {
    let newPresent = present.filter(item => item.id!==id)
    setPresent(newPresent);
  }
  
   return (
     <div>
       <div className='container'>
         <h1>Топ {present.length} новогодних подарков</h1>
       </div>
       {present.map(presentItem => {
         const {id, name} = presentItem;
         return(
           <div key={id} className='container'>
             <p>{id} - {name}</p>
             <button onClick={() => removePresent(id)} className='btnDel' ></button>
           </div>
         )
       }
       )}
       <div className='container'>
         <button onClick={()=> setPresent([])} className='btnClear'>Очистить всё</button>
       </div>
     </div>
   );
}


export default App;
