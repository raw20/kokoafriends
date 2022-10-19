export let contents = [
  {
    id: 1,
    writer: "춘식이",
    profileImg: "choonsik",
    image: "sample01.jpg",
    title: "관리하는 고양이 춘식이🖐",
    content:
      "뽀득뽀득 오토 손세정기로\n핑크 젤리가 늘 반짝반짝🐾✨\n손만 철저히 관리한다냥🧽",
    date: "2022.10.01",
    like: 23,
  },
  {
    id: 2,
    writer: "라이언",
    profileImg: "lion",
    image: "sample02.jpg",
    title: "차 문을 열 때마다🚘\n드라이버 라이언이 짠!🦁",
    content: "낭만적인 밤 드라이브🌙\n라이언이 길을 비춰줄게요💡",
    date: "2022.09.21",
    like: 52,
  },
  {
    id: 3,
    writer: "춘식이",
    profileImg: "choonsik",
    image: "sample03.jpg",
    title: "춘식이 새 옷 입자👚",
    content:
      "핑크 후디는 춘식이랑 찰떡💓\n새 옷 입은 춘식이를 지금 만나보세요😼",
    date: "2022.09.14",
    like: 49,
  },
];
export function getContentsId(id: number) {
  const selectedContents = contents.filter((ele) => ele.id === id);
  return selectedContents[0];
}
