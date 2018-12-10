import * as React from 'react';
import * as style from './style.css';
import { HeaderLabel } from '../HeaderLabel';

export namespace Header {
  export interface Props {
    headerMenu: Array<object>;
  }
}

export class Header extends React.Component<Header.Props> {
  constructor(props: Header.Props, context?: any) {
    super(props, context);
    // this.handleSave = this.handleSave.bind(this);
  }

  render() {
    return (
      <header className={style.header}>
        {/* <HeaderLabel key={0} label="Call +001 555 801" styleClassName={"headerLabel"}></HeaderLabel> */}
        <label className={style.headerLabel}>Call +001 555 801</label>
        <div className="">
          {(() => {
            return this.props.headerMenu.map((obj:any) => {
              return(
                <HeaderLabel key={obj.text} label={obj.text} styleClassName={"headerLabel"}></HeaderLabel>
              )
            })
          })()}
        </div>
      </header>
    );
  }
}
