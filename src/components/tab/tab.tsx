import { clsx } from 'clsx';
import { TabProps } from './tab.types';

import styles from './tab.module.sass';

export function Tab(props: TabProps) {
    return (
        <>
            <button
                onClick={props.onClick}
                className={clsx(
                    styles['tab'],
                    props.className,
                    props.active && styles[`tab__active`],
                    props.disabled && styles[`tab__disabled`]
                )}
            >
                {props.children}
            </button>
        </>
    )
}
