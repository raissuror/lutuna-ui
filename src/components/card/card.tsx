import styles from "./card.module.sass"

type CardProps = Readonly<{
    children: string
}>

export function Card(props:CardProps){
    <div className={styles.card}>{props.children}</div>
}