import React, {ComponentType, LazyExoticComponent, ReactElement, ReactNode} from 'react';
export interface RouterInterfaces {
    path: string;
    Module: LazyExoticComponent<() => ReactElement> | ComponentType<ReactElement>;
}

export interface RouteItemSideNavInterface {
    to: string;
    name: string;
    Component: () => React.FC;
}
