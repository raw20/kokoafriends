import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { allUserBuyItemList, buyItem, selectUserBuyItemList, } from "./db/buyItem.js";
import { comments } from "./db/comment.js";
import { contents } from "./db/contents.js";
import { getItemId, item } from "./db/Item.js";
import { deleteReview, getItemReview, postReview, review, } from "./db/review.js";
import { user } from "./db/user.js";
let nowUser = [];
const typeDefs = `#graphql
  type Item {
    sId: Int!
    sName: String!
    sTitle: String!
    sContents: String!
    sPrice: Int!
    sLike: Int!
    sView: Int!
    sHalf_title:String!
    sCategory:String!
    slideImg: [String]!
    mainTopImg: [String]!
    mainMidImg: [String]!
    mainBottomImg: [String]!
  }
  type User{
    user_code : Int
    kakao_id : String
    kakao_profile_img : String
    kakao_nickname : String
    kakao_email : String
    user_role : String
    create_time : Date
  }
  type Contents {
    cId : Int!
    cWriter : String!
    cProfileImg : String!
    cImage : String!
    cTitle : String!
    cContent : String!
    cDate : String!
    cLike : Int!
  }
  type Comment {
    tId : Int!
    cId : Int!
    user_code : Int!
    comment : String!
    co_date : Date!
  }
  type Review {
    rId : Int
    sId : Int
    user_code : Int
    rReview : String
    kakao_nickname : String
    rDate : Date
  }
  type BuyItem {
    bId: Int
    sId : Int
    user_code: Int
    bDate : Date
    sName: String
    sPrice: Int
    slideImg: [String]
  }
  type Query {
    item : [Item]!
    selectItem(id:Int!) : [Item]!
    contents : [Contents]!
    comments : [Comment]
    user : [User]
    myProfile : [User]
    review : [Review]
    selectReview (id:Int!) : [Review]
    nowUser : [User]
    allUserBuyItemList : [BuyItem]
    selectUserBuyItemList (user_code:Int!) : [BuyItem]
  }
  scalar Date
  type Mutation {
    postReviews(rId:Int, sId:Int, user_code:Int, rReview:String ) : Review
    deleteReviews(id:Int!) : Review
    logInUser(user_code:Int!,kakao_id:String!,kakao_profile_img:String,kakao_nickname:String!, kakao_email:String!,user_role:String!,create_time:Date) : User
    logOutUser:User
    buyItems(bId:Int, sId:Int, user_code:Int) : BuyItem
  }
`;
const resolvers = {
    Query: {
        item: () => item(),
        contents: () => contents(),
        comments: () => comments(),
        user: () => user(),
        nowUser: () => nowUser,
        selectItem: (root, { id }) => getItemId(id),
        review: () => review(),
        selectReview: (root, { id }) => getItemReview(id),
        allUserBuyItemList: () => allUserBuyItemList(),
        selectUserBuyItemList: (root, { user_code }) => selectUserBuyItemList(user_code),
    },
    Mutation: {
        postReviews: (root, { rId, sId, user_code, rReview }) => {
            return postReview(rId, sId, user_code, rReview);
        },
        deleteReviews(root, { id }) {
            return deleteReview(id);
        },
        logInUser(root, { user_code, kakao_id, kakao_profile_img, kakao_nickname, kakao_email, user_role, create_time, }) {
            const me = {
                user_code,
                kakao_id,
                kakao_profile_img,
                kakao_nickname,
                kakao_email,
                user_role,
                create_time,
            };
            nowUser.push(me);
            if (nowUser.length > 1) {
                nowUser = [];
                nowUser.push(me);
            }
            return me;
        },
        logOutUser: () => (nowUser = []),
        buyItems: (root, { bId, sId, user_code }) => {
            return buyItem(bId, sId, user_code);
        },
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀 Server listening at: ${url}`);
})();
