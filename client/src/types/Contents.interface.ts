export interface Contents {
  cId: number;
  cWriter: string;
  cProfileImg: string;
  cImage: string;
  cTitle: string;
  cContent: string;
  cDate: string;
  cLike: string;
  kakao_nickname: [string];
  comment: [string];
}

export interface Comment {
  tId: number;
  cId: number;
  user_code: number;
  comment: string;
  kakao_nickname: string;
  co_date: string;
}

export interface LikeContents {
  lId: number;
  user_code: number;
  cId: number;
  like_check: number;
}
