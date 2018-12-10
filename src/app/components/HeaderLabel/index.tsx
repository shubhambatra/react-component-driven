import * as React from 'react';
import * as style from './style.css';

export namespace HeaderLabel {
    export interface Props {
        label: string;
        // action: typeof HeaderACtions
        styleClassName: string;
    }
}

export class HeaderLabel extends React.Component<HeaderLabel.Props> {
    constructor(props: HeaderLabel.Props, context?: any) {
        super(props, context); 
    }

    render() {
        let text: string = this.props.label;
        return (
            <label className={style[this.props.styleClassName]}>{text}</label>
        )
    }
}