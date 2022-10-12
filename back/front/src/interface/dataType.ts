export interface Item {
  id: number;
  name: string;
  title: string;
  bannerImg: string;
  contents: string;
  price: number;
  like: number;
  view: number;
  comment: string;
  category: string;
  slideImg: [string];
  mainTopImg: [string];
  mainMidImg: [string];
  mainBottomImg: [string];
}

export interface ItemObj {
  item: Item[];
}
export interface SearchItem {
  searchData: Item[];
}
export interface SelectItemObj {
  selectItem(id: number): Item[];
}
