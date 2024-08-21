import styles from "./button.module.sass"

type ButtonProps = Readonly<{
    children: string
}>;

export function Button(props: ButtonProps) {
    return (
        <button className={styles["button"]}>
            <span className={styles["button__content"]}>
                {props.children}
            </span>
        </button>
    )
}
