import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {item} from "./db/Item.js";
import {contents} from "./db/contents.js";
import {comments} from "./db/comment.js";
import {user} from "./db/user.js";
import {review} from "./db/review.js";

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
    co_date : Date
  }
  
   type Review {
    rId : Int!
    sId : Int!
    user_code : Int!
    rReview : String!
    rDate : Date
  }
  
  type Query {
    item : [Item]
    contents : [Contents]!
    comments : [Comment]
    user : [User]
    review : [Review]
  }
    scalar Date

`;

const resolvers = {
  Query: {
    item:() => item(),
    contents:() => contents(),
    comments:() => comments(),
    user:() => user(),
    review:() => review()
  },

};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
(async () => {
  const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
  });
  console.log(`🚀 Server listening at: ${url}`);
})();




