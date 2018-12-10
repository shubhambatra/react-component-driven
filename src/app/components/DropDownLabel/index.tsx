import * as React from 'react';
import * as style from './style.css';


export namespace DropDownLabel {
    export interface Props {
        // 
        options: Array<string>,
        styleClassName: string;
    }
}
export class DropDownLabel extends React.Component<DropDownLabel.Props> {
    constructor(props: DropDownLabel.Props, context?: any) {
        super(props, context);
    }

    render() {
        let options = this.props.options; // ["Rupah", "Doller", "Euro"]
        return(
            <select className={style[this.props.styleClassName]} name="currency">
                {(() => 
                    options.map((option) => 
                        <option key={option} value={option}>{option}</option>
                    )    
                )()}
            </select>
        )
    }
}