import * as React from 'react';
import * as style from './style.css';

export namespace IconLabel {
    export interface Props {
        iconName: string;
        // action: typeof HeaderACtions
        styleClassName: string;
    }
}

export class IconLabel extends React.Component<IconLabel.Props> {
    constructor(props: IconLabel.Props, context?: any) {
        super(props, context); 
    }

    render() {
        return (
            <label className={style[this.props.styleClassName]}>
                <i className={this.props.iconName}></i>
            </label>
        )
    }
}
