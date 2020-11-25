const Card3 = (props) => {
    return ( 
        <div className="user">
        <figure>
            <img src={props.userImg} alt=""/>
            <figcaption style={{color: props.userColor}}>
                {props.userFullName} is {props.userGender} and {props.userGender === "Male" ? "his" : "her"} email is: {props.userEmail}
            </figcaption>
        </figure>
    </div> 
     );
}
 
export default Card3;
