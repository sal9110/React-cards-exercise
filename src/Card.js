
import "./Card.css"


const Card= (props)=>{

return (
    <div>
        {props.people.map((person)=>{
            return(
                <div className={"card "+ (person.gender==="male"? "boy-background":"girl-background")}>
                    <img src={person.avatar} alt={person.firstName}/>
                    <ul>
                        <li> <strong>Name:</strong> {person.firstName}</li>
                        <li> <strong>Last Name:</strong> {person.lastName}</li>
                        <li> <strong>Gender:</strong> {person.gender}</li>
                        <li> <strong>Height:</strong> {person.height}</li>
                        <li> <strong>Birth:</strong> {person.birth.weekDay} {person.birth.day} {person.birth.month} {person.birth.year} </li>
                    </ul>
                </div>
            )
        })}
    </div>
)
}



export default Card