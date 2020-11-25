import Card from "./Card"
import supercoderVariable from "../data/supercoder.json"


const Section = () => {
    return ( 
        <section id="first-section">

            <Card 
                nameKey="Finn"
                alterKey= "22"
                img="https://picsum.photos/id/237/200/300"
                 />
            <Card 
                nameKey="Aos"
                alterKey= "18"
                img="https://picsum.photos/id/317/200/300"
                 />
            <Card 
                nameKey="Francis"
                alterKey= "23"
                img="https://picsum.photos/id/257/200/300"
                 />
            <Card 
                nameKey="Young"
                alterKey= "22"
                img="https://picsum.photos/id/239/200/300"
                 />
            <Card 
                nameKey="Khaled"
                alterKey= "23"
                img="https://picsum.photos/id/217/200/300"
                 />
                 {supercoderVariable.map((singleSupercoder, index) => <Card
                    nameKey ={singleSupercoder.name}
                    alterKey={singleSupercoder.alter}
                    img={singleSupercoder.img}
                    key={index}
                    />)}
        </section>
     );
}
 
export default Section;