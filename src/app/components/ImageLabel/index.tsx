import * as React from 'react';
import * as style from './style.css';


export namespace ImageLabel {
    export interface Props {
        // 
        imageUrl: string,
        styleClassName: string,
    }
}
export class ImageLabel extends React.Component<ImageLabel.Props> {
    constructor(props: ImageLabel.Props, context?: any) {
        super(props, context);
    }

    render() {
        return(
            <img src={this.props.imageUrl} className={style[this.props.styleClassName]} />
        )
    }
}