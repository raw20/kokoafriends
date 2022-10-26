/*import mysql from "mysql2/promise";
import { dbConfig } from "./db.config.js";

const pool1 = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const item = async () => {
  const [rows] = await pool1.query("select * from shop");
  return rows;
}; export function getItemId(id: number) {
  const selectedItem = item.filter((ele) => ele.sId === id);
  return selectedItem[0];
} */
export const item = [
  {
    id: 1,
    name: "디지털 무빙시계_라이언&춘식이",
    title: "시간 변화에 따라\n라이언 춘식이가 짠",
    contents: "귀여운 아트웍이 매력적인\n디지털 무빙 시계를 소개합니다",
    price: 39000,
    like: 40,
    view: 52,
    half_title: "시간 변화에 따라\n라이언 춘식이가 짠!",
    category: "디지털&문구",
    slideImg: [
      "digital_clock_lion-choonsik_01.jpg",
      "digital_clock_lion-choonsik_02.jpg",
      "digital_clock_lion-choonsik_03.jpg",
    ],
    mainTopImg: [
      "digital_clock_lion-choonsik_04.jpg",
      "digital_clock_lion-choonsik_05.jpg",
    ],
    mainMidImg: [
      "digital_clock_lion-choonsik_06.jpg",
      "digital_clock_lion-choonsik_07.jpg",
    ],
    mainBottomImg: [
      "digital_clock_lion-choonsik_08.jpg",
      "digital_clock_lion-choonsik_09.jpg",
    ],
  },
  {
    id: 2,
    name: "스탠드형칫솔살균기_머그리틀라이언",
    title: "내 칫솔을 깨끗하게",
    contents: " 스탠드형 칫솔살균기로\n구강 건강 챙겨봐요",
    price: 29000,
    like: 43,
    view: 60,
    half_title: "프렌즈 칫솔 지킴이\n청결하게 양치해요",
    category: "디지털&생활",
    slideImg: [
      "mug_little_lion_01.jpg",
      "mug_little_lion_02.jpg",
      "mug_little_lion_03.jpg",
      "mug_little_lion_04.jpg",
      "mug_little_lion_05.jpg",
    ],
    mainTopImg: ["mug_little_lion_06.jpg"],
    mainMidImg: ["mug_little_lion_07.jpg", "mug_little_lion_08.jpg"],
    mainBottomImg: ["mug_little_lion_09.jpg"],
  },
  {
    id: 3,
    name: "자전거램프_라이언",
    title: "자전거 타기 좋은 날",
    contents: "핸들 위 달랑달랑\n라이언 램프가 반짝!",
    price: 15000,
    like: 66,
    view: 83,
    half_title: "귀여움과 안전을 책임져줄\n나만의 라이딩 메이트",
    category: "디지털",
    slideImg: [
      "bike_lamp_lion_01.jpg",
      "bike_lamp_lion_02.jpg",
      "bike_lamp_lion_03.jpg",
      "bike_lamp_lion_04.jpg",
      "bike_lamp_lion_05.jpg",
      "bike_lamp_lion_06.jpg",
    ],
    mainTopImg: ["bike_lamp_lion_07.jpg"],
    mainMidImg: ["bike_lamp_lion_08.jpg", "bike_lamp_lion_09.jpg"],
    mainBottomImg: ["bike_lamp_lion_10.jpg"],
  },
  {
    id: 4,
    name: "모션감지 센서등(건전지타입)_라이언",
    title: "근처에만 가도 반짝",
    contents: "내 공간을 아늑하게 밝혀줄\n라이언과 춘식이 센서등",
    price: 32000,
    like: 39,
    view: 53,
    half_title: "근처를 지나가면\n라이언 달님이 반짝",
    category: "디지털&생활",
    slideImg: [
      "motion_sensor_lion_01.jpg",
      "motion_sensor_lion_02.jpg",
      "motion_sensor_lion_03.jpg",
      "motion_sensor_lion_04.jpg",
    ],
    mainTopImg: ["motion_sensor_lion_05.jpg"],
    mainMidImg: ["motion_sensor_lion_06.jpg", "motion_sensor_lion_07.jpg"],
    mainBottomImg: ["motion_sensor_lion_08.jpg"],
  },
  {
    id: 5,
    name: "춘식이 차량용 목쿠션",
    title: "춘식이의 첫 드라이브",
    contents:
      "답답한 집콕에 지쳐있다면\n춘식이와 함께 기분 좋은 드라이브를 떠나보세요",
    price: 12000,
    like: 25,
    view: 37,
    half_title: "춘식이의 첫 드라이브",
    category: "생활",
    slideImg: [
      "cars_cushion_choonsik_01.jpg",
      "cars_cushion_choonsik_02.jpg",
      "cars_cushion_choonsik_03.jpg",
    ],
    mainTopImg: ["cars_cushion_choonsik_04.jpg"],
    mainMidImg: ["cars_cushion_choonsik_05.jpg"],
    mainBottomImg: [
      "cars_cushion_choonsik_06.jpg",
      "cars_cushion_choonsik_07.jpg",
    ],
  },
  {
    id: 6,
    name: "[킨토]투고텀블러 360ml_라이언&춘식이",
    title: "라이언&춘식이와 티타임",
    contents: "답답한 업무에 지쳐있다면\n카카오프렌즈와 함께 차한잔",
    price: 45000,
    like: 22,
    view: 31,
    half_title: "휴식이 필요할 땐\n프렌즈와 칠랙스",
    category: "생활",
    slideImg: [
      "togo_tumbler_lion-choonsik_01.jpg",
      "togo_tumbler_lion-choonsik_02.jpg",
      "togo_tumbler_lion-choonsik_03.jpg",
      "togo_tumbler_lion-choonsik_04.jpg",
    ],
    mainTopImg: ["togo_tumbler_lion-choonsik_05.jpg"],
    mainMidImg: ["togo_tumbler_lion-choonsik_06.jpg"],
    mainBottomImg: ["togo_tumbler_lion-choonsik_07.jpg"],
  },
  {
    id: 7,
    name: "춘식이 페이스 스퀴즈볼_서럽",
    title: "조물 조물 춘식이\n스트레스 팡팡 날려요",
    contents: "답답한 업무에 지쳐있다면\n춘식이를 날려보세요",
    price: 9000,
    like: 3,
    view: 10,
    half_title: "조물 조물 춘식이\n스트레스 팡팡 날려요",
    category: "생활&문구",
    slideImg: [
      "squizball_cry_choonsik_01.jpg",
      "squizball_cry_choonsik_02.jpg",
      "squizball_cry_choonsik_03.jpg",
    ],
    mainTopImg: [
      "squizball_cry_choonsik_04.jpg",
      "squizball_cry_choonsik_05.jpg",
    ],
    mainMidImg: [
      "squizball_cry_choonsik_06.jpg",
      "squizball_cry_choonsik_07.jpg",
      "squizball_cry_choonsik_08.jpg",
    ],
    mainBottomImg: ["squizball_cry_choonsik_09.jpg"],
  },
  {
    id: 8,
    name: "춘식이 베이직 카드 하이파이브",
    title: "소중한 마음을 담아\n춘식이가 전해드려요",
    contents: "답답한 일상에 지쳐있다면\n편지를 써보아요",
    price: 1000,
    like: 2,
    view: 8,
    half_title: "소중한 마음을 담아\n춘식이가 전해드려요",
    category: "문구",
    slideImg: [
      "basic_card_hifive_choonsik_01.jpg",
      "basic_card_hifive_choonsik_02.jpg",
      "basic_card_hifive_choonsik_03.jpg",
      "basic_card_hifive_choonsik_04.jpg",
      "basic_card_hifive_choonsik_05.jpg",
    ],
    mainTopImg: ["basic_card_hifive_choonsik_06.jpg"],
    mainMidImg: ["basic_card_hifive_choonsik_07.jpg"],
    mainBottomImg: ["basic_card_hifive_choonsik_08.jpg"],
  },
  {
    id: 9,
    name: "실리콘 코스터 라이언",
    title: "테이블 위 생기발랄 포인트",
    contents: "귀여운 동작으로 테이블 위에\n생기를 더해줄 라이언 코스터입니다",
    price: 8500,
    like: 1,
    view: 3,
    half_title: "테이블 위 생기발랄 포인트",
    category: "생활",
    slideImg: [
      "silicon_coaster_lion_01.jpg",
      "silicon_coaster_lion_02.jpg",
      "silicon_coaster_lion_03.jpg",
    ],
    mainTopImg: ["silicon_coaster_lion_04.jpg", "silicon_coaster_lion_05.jpg"],
    mainMidImg: ["silicon_coaster_lion_06.jpg"],
    mainBottomImg: [
      "silicon_coaster_lion_07.jpg",
      "silicon_coaster_lion_08.jpg",
    ],
  },
  {
    id: 10,
    name: "라이언 크리미 맥주 거품기",
    title: "시원하고 부드러운 한 잔\n라이언과 크림맥주 타임",
    contents: "답답한 일상에 지쳐있다면\n시원하게 맥주 한잔해보세요",
    price: 29000,
    like: 4,
    view: 7,
    half_title: "시원하고 부드러운 한 잔\n라이언과 크림맥주 타임",
    category: "디지털&생활",
    slideImg: [
      "creamy_beer_bubble_lion_01.jpg",
      "creamy_beer_bubble_lion_02.jpg",
      "creamy_beer_bubble_lion_03.jpg",
      "creamy_beer_bubble_lion_04.jpg",
      "creamy_beer_bubble_lion_05.jpg",
    ],
    mainTopImg: [
      "creamy_beer_bubble_lion_06.jpg",
      "creamy_beer_bubble_lion_07.jpg",
    ],
    mainMidImg: ["creamy_beer_bubble_lion_08.jpg"],
    mainBottomImg: [
      "creamy_beer_bubble_lion_09.jpg",
      "creamy_beer_bubble_lion_10.jpg",
    ],
  },
];
export function getItemId(id: number) {
  const selectedItem = item.filter((ele) => ele.id === id);
  return selectedItem[0];
}
// const tableName = "shop"

/*
export const item =
    {
    selectAll: async (sId, sName, sPrice, sLike, sView, sCategory, sImage) => {
      const query = `SELECT * FROM ${tableName}`;
      const result = await pool.query(query, [sId, sName, sPrice, sLike, sView, sCategory, sImage]);

      return result ? statusUtil.success(result) : statusUtil.false();
    },
    insert: async (sId, sName, sPrice, sLike, sView, sCategory, sImage) => {
      const query = `INSERT INTO ${tableName} (sId, sName, sPrice, sLike, sView, sCategory, sImage) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const result = await pool.query(query, [sId, sName, sPrice, sLike, sView, sCategory, sImage]);

      return result ? statusUtil.success(result) : statusUtil.false();
    },
  };
*/
