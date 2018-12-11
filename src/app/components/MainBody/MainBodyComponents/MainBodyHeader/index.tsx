import * as React from 'react';
import * as style from './style.css';

import { HeaderLabel } from '../../../HeaderLabel';
import { IconLabel } from 'app/components/IconLabel';
import { DropDownLabel } from 'app/components/DropDownLabel';

export namespace MainBodyHeader {
    export interface Props {
        headerMenu: any;
        icons: Array<string>;
        options: any;
    }
}

export class MainBodyHeader extends React.Component<MainBodyHeader.Props> {
    constructor(props: MainBodyHeader.Props, context?: any) {
        super(props, context); 
    }

    render() {
        let { headerMenu, icons, options } = this.props;
        // let iconArray:Array<string> = ["fa fa-facebook", "fa fa-twitter", "fa fa-pinterest-p", "fa fa-camera-retro"]
        // let options:Array<string> = ["Rupah", "Doller", "Euro"];
          
        return (
            <div className={style.mainBodyHeader}>
                <div className={style.leftHeader}>
                    {(() => 
                        headerMenu.map((menu:any) => {
                            let text:string = menu.text;
                            return <HeaderLabel key={text} label={text} styleClassName="mainBodyHeaderLabel"></HeaderLabel>
                        })
                    )()}
                </div>
                <div className={style.bodyNameHeader}>
                  Shophia
                </div>
                <div className={style.iconHeader}>
                    {(() => 
                        icons.map((iconName) =>
                            <IconLabel key={iconName} iconName={iconName} styleClassName="icon"></IconLabel>
                        ))()}
                    <DropDownLabel styleClassName="mainBodyHeaderDropDown" options={options}></DropDownLabel>
                </div>
            </div>
        )
    }
}