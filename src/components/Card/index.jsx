import styles from "./styles.module.css";

function Card(props){

    if(props.city.country === "BRA"){
        return(
            <div className={styles.card}>
            <ul>
                <li className={styles.list} style={{background:props.city.color}}>
                    <h4>{props.city.country}</h4>
                    <h2 className={styles.city} >{props.city.city}</h2>
                    <p>População: {props.city.population}</p>
               </li>
            </ul>
            </div>
        )
    }
}

export default Card;