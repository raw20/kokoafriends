export const typeDefs = `#graphql
  type Products {
    sId: Int
    sName: String!
    sTitle: String!
    sContents: String!
    sPrice: Int!
    sLike: Int!
    sView: Int
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

  type Reviews {
    rId : Int
    sId : Int
    user_code : Int
    rReview : String
    kakao_nickname : String
    rDate : Date
  }

  type Cart {
    bId: Int
    sId : Int
    user_code: Int
    bDate : Date
    sName: String
    sPrice: Int
    bCount:Int
    slideImg: [String]
    cartId: Int
    check: Boolean
  }

  type Query {
    products : [Products]!
    product(id:Int!) : Products!
    user : [User]
    reviews : [Reviews]
    review (id:Int!) : [Reviews]
    cart : [Cart]
  }
  scalar Date
  type Mutation {
    postReviews(rId:Int, sId:Int, user_code:Int, rReview:String ) : Reviews
    deleteReviews(id:Int!) : Reviews
    addCart(cartId:Int!,sId:Int!,sName: String!,sPrice: Int!, bCount:Int!, slideImg: [String]!,check:Boolean!): Cart 
    checkAdd(index:Int!) : Cart
    checkDelete(index:Int!) : Cart
    updateBCount(index:Int!, bCount:Int): Cart
    deleteCartItem(cartId:Int): Cart
    countViews(id:Int) : Products
  }
    scalar Date

`;
