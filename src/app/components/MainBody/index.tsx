import * as React from 'react';
import * as style from './style.css';

import { MainBodyHeader } from './MainBodyComponents/MainBodyHeader';
import { ImageLabel } from '../ImageLabel';

export namespace MainBody {
    export interface Props {
        // 
    }
}
export class MainBody extends React.Component<MainBody.Props> {
    constructor(props: MainBody.Props, context?: any) {
        super(props, context);
    }

    render() {
        let imageUrl: string = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";
        let styleClassName: string = "imageLayer";
        return(
            <div className={style.mainBody}>
                <MainBodyHeader />
                <ImageLabel imageUrl={imageUrl} styleClassName={styleClassName} />
            </div>
        )
    }
}