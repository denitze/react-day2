import georgsData from "../data/MOCK2.json"
import Card3 from "./Card3"

const Section3 = () => {
    return (  
<section className="georgsGrid">

{georgsData.map(singleData => <Card3 
                userImg={singleData.image}
                userFirstName={singleData.first_name}
                userLastName={singleData.last_name}
                userEmail={singleData.email}
                userGender={singleData.gender}
                userColor={singleData.color}
                userFullName={singleData.first_name +" "+ singleData.last_name}
                key={singleData.id}
            
            />)}

</section>
    );
}
 
export default Section3;