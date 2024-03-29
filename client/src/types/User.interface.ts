export interface IUser {
  kakao_id: string;
  kakao_profile_img: string;
  kakao_nickname: string;
  kakao_email: string;
  user_role: string;
  create_time: Date;
}
export interface IMeData {
  me: [IUser];
}

export interface UserResponseData {
  connected_at: Date;
  id: number;
  properties: {
    profile_image: string;
    nickname: string;
  };
  kakao_account: {
    email: string;
  };
}
