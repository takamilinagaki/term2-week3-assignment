export default function Card({
    degree= "none",
    colour = "",
    font = "0",
    image = "icon/personTwo.png"
}) {


    return(
        <div style={{backgroundColor: colour, fontSize: font}}>
            {
                font === "16px" ? <img src={'icon/person.png'} width="50"/>:
                font === "15px" ? <img src={'icon/personTwo.png'} width="50"/>:
                                    <img src={image} width="50"/>
            }
           {degree}
        </div>
    )
}