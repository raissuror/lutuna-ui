import { TabProps } from "../tab/tab.types";

export type TabBarProps = Readonly<{
    tabs: TabProps[],
    className?: string
}>;
