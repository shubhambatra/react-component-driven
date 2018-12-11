/** TodoMVC model definitions **/

export interface TodoModel {
  id: number;
  text: string;
  completed?: boolean;
  topHeaderMenu?: any;
  mainHeaderMenu?: any;
  iconArray?:any;
  options?: any;
}

export namespace TodoModel {
  export enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}
