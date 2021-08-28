import React from 'react'
import './ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
     <input type="text" 
     id={item.key} 
     value={item.text}>
      
     </input>

     <span>
       
       <FontAwesomeIcon className="faicons"  icon="trash" 
           onClick ={ () => props.deleteItem(item.key)}
       />
       </span>
     </p>
    
     </div>
    })     
    return( 
    <div>{listItems}</div>
    )
    }
  export default ListItems;
