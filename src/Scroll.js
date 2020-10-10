import React from 'react';

const Scroll = (props)=>{
    return (
    <div style={{overflowY: 'scroll', border: '3px solid black', height: '500px'}}>
    {props.children}
    </div>
    )
}
// can add style to div in jsx
//in jsx can use javascript expression to have css styles in double {{}}
// using props.children we can create components that wrap other components
//scroll can use children as a way to render its children. cardlist is children to 
export default Scroll