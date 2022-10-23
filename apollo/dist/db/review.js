export let reviews = [
    {
        id: 1,
        product_id: 1,
        kakaoId: "1234567892",
        review: "만족하게 잘 쓰고 있습니다!! 강추!!",
        date: "2022.10.03",
    },
    {
        id: 2,
        product_id: 2,
        kakaoId: "1234567894",
        review: "배송이 빨라서 좋쿠요~~~",
        date: "2022.10.09",
    },
    {
        id: 3,
        product_id: 2,
        kakaoId: "1234567891",
        review: "아이들이 정말 좋아하네요~~",
        date: "2022.09.23",
    },
    {
        id: 4,
        product_id: 3,
        kakaoId: "1234567896",
        review: "귀엽고 귀여운 제품!!",
        date: "2022.10.12",
    },
    {
        id: 5,
        product_id: 4,
        kakaoId: "1234567895",
        review: "나름 만족스럽습니다~",
        date: "2022.10.13",
    },
    {
        id: 6,
        product_id: 5,
        kakaoId: "1234567896",
        review: "귀엽고 만족스러운 제품!!",
        date: "2022.10.13",
    },
    {
        id: 7,
        product_id: 5,
        kakaoId: "1234567891",
        review: "아내가 좋아합니다~~",
        date: "2022.10.13",
    },
    {
        id: 8,
        product_id: 6,
        kakaoId: "1234567893",
        review: "운동할때 들고다니기 좋아요~",
        date: "2022.10.13",
    },
    {
        id: 9,
        product_id: 7,
        kakaoId: "1234567896",
        review: "귀엽고 귀여운 제품!!",
        date: "2022.10.13",
    },
    {
        id: 10,
        product_id: 8,
        kakaoId: "1234567896",
        review: "귀엽고 귀여운 제품!!",
        date: "2022.10.13",
    },
    {
        id: 11,
        product_id: 9,
        kakaoId: "1234567896",
        review: "귀엽고 귀여운 제품!!",
        date: "2022.10.13",
    },
    {
        id: 12,
        product_id: 10,
        kakaoId: "1234567896",
        review: "귀엽고 귀여운 제품!!",
        date: "2022.10.15",
    },
    {
        id: 13,
        product_id: 3,
        kakaoId: "1234567894",
        review: "잘 쓰고 있는중입니다",
        date: "2022.10.16",
    },
    {
        id: 14,
        product_id: 2,
        kakaoId: "1234567892",
        review: "제 아내도 잘 쓰는 중입니다~~",
        date: "2022.10.17",
    },
    {
        id: 15,
        product_id: 2,
        kakaoId: "1234567895",
        review: "정말 너무너무 귀여워요~~❤",
        date: "2022.10.17",
    },
];
export function deleteItemId(id) {
    const deletedReview = reviews.filter((review) => review.id !== id);
    if (reviews.length !== deletedReview.length) {
        reviews = deletedReview;
    }
}
