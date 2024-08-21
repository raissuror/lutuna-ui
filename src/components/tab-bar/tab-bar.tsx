import { TabBarProps } from './tab-bar.types';
import { Tab } from '../tab/tab';

import styles from './tab-bar.module.sass';

export function TabBar (props: TabBarProps) {
  return(
    <>
      <div className={styles['tab__bar']}>
        {props.tabs?.map(tab => 
          <Tab
            children={tab.children}
            disabled={tab.disabled}
            active={tab.active}
            onClick={tab.onClick}
          />
        )}
      </div>
    </>
  )
}
