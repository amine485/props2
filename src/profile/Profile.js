import React from 'react' ;
import propTypes from 'prop-types'
 

const Profile=(props)=> {
  function handleName(e) {
    e.preventDefault();
    
    alert(`Hello Amine Mrabet`);
  }
  return (

    <div >
        {props.x.map((prof) => (
          <div style={{border: '1px solid black'}} >
    <div style={{  marginLeft:'550px' , marginTop:'100px'}}>
       <p>FullName : <a href="/" onClick={handleName}>Click to see FullName </a> </p>
       <p>Bio : {prof.Bio}</p>
       <p>Profession : {prof.Profession}</p> 

       <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    <div style={{ marginLeft:'420px'}}>
        <p>{props.children}</p>
     </div>
     </div>
        ))}
 
     </div>

    ) }
    
    Profile.defaultProps = {
      Bio: "the bio is not passed",
      Profession:"the profession is not passed",
      handleName: "your function is not passed",
      Children: "your profile photo is not passed",
    
 
    };
   
Profile.propTypes = {
FullName:propTypes.string,
Bio:propTypes.string,
Profession:propTypes.string,
handleName:propTypes.func,
children:propTypes.object
}


export default Profile ;
