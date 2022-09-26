import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `#graphql
  type MainBanner {
    id: Int!
    title: String!
    img:String!
    contents:String!
  }

  type Query {
    mainBanners: [MainBanner]
  }
`;
const mainBanners = [
    {
        id: 1,
        title: "시간 변화에 따라 /n라이언 춘식이가 짠",
        img: "HomeBanner01.jpg",
        contents: "귀여운 아트웍이 매력적인 /n디지털 무빙 시계를 소개합니다",
    },
    {
        id: 2,
        title: "내 칫솔을 깨끗하게",
        img: " HomeBanner02.jpg",
        contents: " 스탠드형 칫솔살균기로 /n구강 건강 챙겨봐요",
    },
    {
        id: 3,
        title: "자전거 타기 좋은 날",
        img: "HomeBanner03.jpg",
        contents: "핸들 위 달랑달랑 /n라이언 램프가 반짝!",
    },
    {
        id: 4,
        title: "근처에만 가도 반짝",
        img: "HomeBanner04.jpg",
        contents: "내 공간을 아늑하게 밝혀줄 /n라이언과 춘식이 센서등",
    },
];
const resolvers = {
    Query: {
        mainBanners: () => mainBanners,
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
