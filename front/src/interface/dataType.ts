export interface BestItem {
  id: number;
  name: string;
  title: string;
  bannerImg: string;
  contents: string;
  price: number;
  like: number;
  view: number;
  comment: string;
  slideImg: [string];
  mainTopImg: [string];
  mainMidImg: [string];
  mainBottomImg: [string];
}

export interface BestItemObj {
  bestItem: BestItem[];
}
export interface SelectBestItemObj {
  selectBestItem(id: number): BestItem[];
}
