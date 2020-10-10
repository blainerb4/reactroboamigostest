import React from 'react';

/*const card = ({name, email, id})=>{
     //take this out   const {name, email, id} = props
    return (
        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src= {`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}*/
const card = (props)=>{
    return (
        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src= {`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}


//need to import react to right jsx 
// props so it can work in {} dyanmic names passing as properties
// to destructure const {name, email, id} = props
export default card