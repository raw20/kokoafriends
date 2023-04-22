# 코코아 프렌즈 웹 반응형 쇼핑몰 구현

## 🔹프로젝트 설명

- 2인으로 이루어진 팀 스터디를 통해 카카오프렌즈샵을 예시로 구현한 쇼핑몰입니다.

- 기간 : 22.09.02 ~ 22.11.14

- 1차 리팩토링 기간 : 23.01.26 ~ 23.03.03

- 2차 리팩토링 기간 : 23.03.27 ~ 23.04.21

## 🔹조원 및 역할

- 정찬욱: 프론트엔드 기능 담당 및 백엔드 보조, 배포

- 박민규 : 백엔드 기능 및 데이터 파이프라인, 배포

## 🔹페이지구성

- 메인페이지

  - 홈 화면 (특정 상품을 캐러셀 형식으로 광고)

  - 베스트 화면 (조회수 순으로 전체 상품 나열)

  - 장바구니 화면

- 상품 상세페이지

  - 정보출력

  - 조회수

  - 장바구니

  - 구매하기

  - 리뷰 작성

- 마이페이지

  - 구현 예정

- 로그인 화면

  - 로그인 버튼을 누르면 `/oauth/callback/kakao` 리다이렉트 링크를 통해 카카오 로그인 api 호출을 하고 응답 성공 시 로그인

**비회원일시 - 로그인창 보내기**

## 🔹개발환경

- IntelliJ

- Visual Studio Code

- HeidiSql

- Sourcetree

- GitHub

## 🔹성능 테스팅 도구

- Postman

## 🔹백엔드

<details markdown="1">
<summary>접기/펼치기</summary>

### ~~Spring boot~~ (1차 리팩토링 때 삭제)

- ~~JAVA 11~~

- ~~Spring MVC~~

- ~~Spring Boot Security~~

- ~~Spring Data JPA~~

- ~~JWT~~

- ~~Oauth~~

- ~~thymeleaf~~

- ~~lombok~~

- ~~devtools~~

- ~~mysql-connector-java~~

- ~~gson~~

- ~~springsecurity5~~

</details>

### Build tool

- Gradle

### Database

- Mysql

- RDS

## 🔹프론트엔드

### 언어

- Typescript

### 주요 라이브러리

- React

- React-Router

- Apollo-client (로컬에 저장된 데이터를 전역 적으로 상태관리 하고 apollo 서버의 정의 된 리졸버를 클라이언트에서 사용하기 위해 사용)

- axios (kakao api를 호출하기 위해 사용)

- kakao login api & kakao Pay api

- Styled-Component & Material UI 라이브러리 (스타일링을 위해 사용)

- react-bootstrap (캐러셀을 구현하기 위해 사용)

- react-daum-postcode (구매하기 시 배송 주소를 받아오기 위해 사용)

### Specification

- GraphQL

## 🔹ERD

![image](https://user-images.githubusercontent.com/62588402/233563047-a724b650-a0aa-4451-ab71-59209f7c39d4.PNG)

## 📋 카카오 로그인 API 문서

- [카카오 로그인 API](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api)

## 📋 주요 키워드

- git repository 다운로드 후 로컬환경에서 서버 실행 테스트 및 유저 데이터 검수 작업<박민규>

- Web Server 구성

  - 기존

    - AWS EC2의 아마존 Ubuntu 기반 위에 Spring의 파일을 jar로 배포 및 React와 Apollo 서버 실행 <박민규>

  - 리팩토링 후

    - AWS EC2의 아마존 Ubuntu 기반으로 React와 Apollo 서버 실행 <정찬욱>

- GraphQL

  하나의 엔드포인트만을 사용하여 요청하는 쿼리에따라 다른 응답을 반환할 수 있도록 설정 <정찬욱>

- Apollo-Cient

  state 관리를 위해 사용 <정찬욱>

## 📋 리팩토링 전 실제 화면

<details markdown="1">
<summary>접기/펼치기</summary>

### 카카오 로그인 화면

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208844802-cb18d45e-5030-4241-994d-e02897bc339f.jpeg" width="450" height="600"/>
</p>

### 메인화면

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208840232-8ab7433d-b41e-4581-89da-8a2e6b9b0944.jpeg" width="800" height="500"/>
</p>

### 베스트 상품

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208840373-0fec2a5d-297b-41f5-bc2c-eb1338f047c1.jpeg" width="450" height="600"/>
</p>

### 상품 상세페이지

#### 1. 상품 이미지 슬라이드

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208841917-a4ffdd20-26e7-44ed-9206-e03c35a7faf8.jpeg" width="450" height="600"/>
</p>

#### 2. 상품 설명

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208842065-38df2c9c-30cb-4673-b296-36a3ae63c1ab.jpeg" width="450" height="600"/>
</p>

#### 3. 리뷰 등록

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208842323-abd3b1c3-a997-4b79-8a9e-b42161941aae.jpeg" width="450" height="600"/>
</p>

### 마이페이지

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208840603-eb1fec18-db89-47a9-b5e1-13d15d56765c.jpeg" width="800" height="500"/>
</p>

### 콘텐츠

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208842774-8e6cc549-0f55-4df0-a745-ba24d2aaea33.jpeg" width="450" height="600"/>
</p>

### 장바구니

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208842978-41e16f89-f642-4ed6-9f40-c78289563213.jpeg" width="450" height="600"/>
</p>

### 검색기능

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208843068-e2bae7c2-dc92-4f75-91c8-7a90c343cb34.jpeg" width="350" height="450"/>
</p>

### 모바일 반응형 버젼

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208843188-4f541c52-6da0-4e9c-a306-1425b8edc81b.jpeg" width="280" height="400"/>
<img src="https://user-images.githubusercontent.com/62588402/208843374-f716ea63-9f46-4475-b8fe-5a03cd7f7658.jpeg" width="280" height="400"/>
</p>

### 비로그인시 로그인이 필요한 페이지 접근시

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/208843723-3db65b2d-eae2-4d32-af2b-17e5b9e16ddc.jpeg" width="350" height="350"/>
</p>

</details>

## 보완해야할 점

### 공통

- 기존 자바 스프링으로 구현한 server와 apollo server 통합

- 로그인

  - 여러명이 접속해 있을때 마이페이지에서 다른 유저의 정보가 출력되는 문제 발생을 수정

  - 카카오 로그인 통신 방식 : REST API --> Javascript JDK

### 정찬욱

- 폴더 구성 및 컴포넌트 분류 미흡

  - Page폴더와 Component 폴더가 있음에도 Page폴더 안에 또 다른 Component가 존재

  - 한 컴포넌트에 300줄이상 코드가 작성되어 가독성이 떨어지고 하위 컴포넌트로 분리 미흡으로 인해 수정할 예정

- 결제화면 페이지

  - 구매하기 누르면 주소입력이 들어간 등 결제화면 페이지가 존재하지 않아 아쉬움이 남았고 이를 수정할 예정

- 리뷰 작성

  - 리뷰 수정기능 추가 및 리뷰 입력이나 수정/삭제 시 한번 더 확인시켜주는 Modal창을 보여주게 수정할 예정

- 디자인 수정

- 장바구니에 상품을 담을 시 확인 시켜주는 SnackBar 형태의 알림창 출력이 되게 수정할 예정

- useParams를 이용하여 필터기능 수정할 예정

### 박민규

- 상품 데이터 크롤링 작업

  - 카카오 프렌즈의 상품 중 약 100개의 상품을 크롤링 하여 상품 테이블에 저장

## 1차 리팩토링 (23.01.26 ~ 23.03.03)

### 1. 폴더 구조 수정 및 파일 분리

- apollo 폴더

  - 폴더 구조는 기존과 차이없음

  - 코드의 가독성과 타입 정의의 반복을 최소화 하기 위하여 graphql 스키마와 리졸버 파일을 `TypeGraphQL` 라이브러리로 재정의

- client 폴더 (2차 리팩토링 때 최종 수정하였음 )

  - service 폴더 추가: graphql 스키마 정의 파일이 담긴 `graphql`폴더와 커스텀 훅 폴더, apollo서버에서 정의된 쿼리와 뮤테이션이 담긴 폴더들을 추가

  - 기존엔 컴포넌트 안에 styled-componets로 작업한 css 코드들을 넣었는데 코드의 가독성을 위해 `.style.tsx`로 분리, 그리고 `styles` 폴더를 생성하여 공통적인 스타일링 요소를 관리

  - store 폴더 추가 : apollo-client로 로컬의 전역 상태 관리 파일을 모아둔 폴더

  - utils 폴더 추가 : 공통으로 사용되는 함수를 분리 시킨 파일을 모아둔 폴더

```
📦src
 ┣ 📂asset
 ┃ ┗ 📂image
 ┃ ┃ ┣ 📂category
 ┃ ┃ ┣ 📂etc
 ┃ ┃ ┗ 📂loading
 ┣ 📂components
 ┃ ┣ 📂AlertPage
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┗ 📜AlertPage.Common.style.tsx
 ┃ ┃ ┣ 📜EmptyCart.tsx
 ┃ ┃ ┣ 📜Error.tsx
 ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┗ 📜PreparingPage.tsx
 ┃ ┣ 📂Avatar
 ┃ ┃ ┣ 📜CategoryAvatar.tsx
 ┃ ┃ ┗ 📜HeaderAvatar.tsx
 ┃ ┣ 📂Button
 ┃ ┃ ┗ 📜ScrollTopButton.tsx
 ┃ ┣ 📂Dialog
 ┃ ┃ ┣ 📜DeleteCartDialog.tsx
 ┃ ┃ ┣ 📜DeleteReviewDialog.tsx
 ┃ ┃ ┗ 📜UpdateReviewDialog.tsx
 ┃ ┣ 📂Footer
 ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┣ 📜Header.style.tsx
 ┃ ┃ ┃ ┗ 📜SearchBar.style.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜SearchBar.tsx
 ┃ ┣ 📂Loading
 ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┣ 📂Modal
 ┃ ┃ ┗ 📜BuyOneProductModal.tsx
 ┃ ┣ 📂Preparing
 ┃ ┗ 📂SnackBar
 ┃ ┃ ┗ 📜FeedBack.tsx
 ┣ 📂constant
 ┃ ┣ 📜category.ts
 ┃ ┣ 📜map.ts
 ┃ ┣ 📜oAuth.ts
 ┃ ┣ 📜reg.ts
 ┃ ┗ 📜storageKey.ts
 ┣ 📂pages
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂Best
 ┃ ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┃ ┣ 📜BestProducts.style.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ProductReviews.style.tsx
 ┃ ┃ ┃ ┣ 📜BestProducts.tsx
 ┃ ┃ ┃ ┣ 📜Product.tsx
 ┃ ┃ ┃ ┣ 📜ProductReviewList.tsx
 ┃ ┃ ┃ ┗ 📜ProductReviews.tsx
 ┃ ┃ ┣ 📂Cart
 ┃ ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┃ ┣ 📜Cart.style.tsx
 ┃ ┃ ┃ ┃ ┣ 📜CartList.style.tsx
 ┃ ┃ ┃ ┃ ┣ 📜DeliveryFee.style.tsx
 ┃ ┃ ┃ ┃ ┗ 📜Receipt.style.tsx
 ┃ ┃ ┃ ┣ 📜Cart.tsx
 ┃ ┃ ┃ ┣ 📜CartList.tsx
 ┃ ┃ ┃ ┣ 📜DeliveryFee.tsx
 ┃ ┃ ┃ ┗ 📜Recceipt.tsx
 ┃ ┃ ┣ 📂Contents
 ┃ ┃ ┃ ┗ 📜Contents.tsx
 ┃ ┃ ┗ 📂Home
 ┃ ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┃ ┣ 📜BannerSlide.style.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Category.style.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Home.style.tsx
 ┃ ┃ ┃ ┃ ┗ 📜NewProducts.style.tsx
 ┃ ┃ ┃ ┣ 📜BannerSlide.tsx
 ┃ ┃ ┃ ┣ 📜Category.tsx
 ┃ ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┃ ┗ 📜NewProducts.tsx
 ┃ ┗ 📂Sub
 ┃ ┃ ┣ 📂BuyCheckout
 ┃ ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┃ ┗ 📜BuyCheckOut.style.tsx
 ┃ ┃ ┃ ┣ 📜BuyCheckout.tsx
 ┃ ┃ ┃ ┣ 📜OrderCustomer.tsx
 ┃ ┃ ┃ ┣ 📜OrderProducts.tsx
 ┃ ┃ ┃ ┣ 📜Payment.tsx
 ┃ ┃ ┃ ┗ 📜ShippingAddress.tsx
 ┃ ┃ ┣ 📂Mypage
 ┃ ┃ ┃ ┗ 📜Mypage.tsx
 ┃ ┃ ┗ 📂Search
 ┃ ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┃ ┗ 📜Search.style.tsx
 ┃ ┃ ┃ ┣ 📜Search.tsx
 ┃ ┃ ┃ ┗ 📜SearchFilterButton.tsx
 ┣ 📂routes
 ┃ ┗ 📜Router.tsx
 ┣ 📂services
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂graphql
 ┃ ┃ ┃ ┗ 📜schema.ts
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┗ 📜useLogin.ts
 ┃ ┃ ┣ 📜KaKaoLoginRedirect.tsx
 ┃ ┃ ┗ 📜KaKaoLogoutRedirect.tsx
 ┃ ┗ 📂products
 ┃ ┃ ┣ 📂graphql
 ┃ ┃ ┃ ┣ 📜bestProductsSchema.ts
 ┃ ┃ ┃ ┗ 📜HomeSchema.ts
 ┃ ┃ ┗ 📂hooks
 ┃ ┃ ┃ ┣ 📂custom
 ┃ ┃ ┃ ┃ ┣ 📜useFeedback.ts
 ┃ ┃ ┃ ┃ ┣ 📜useFilterParams.ts
 ┃ ┃ ┃ ┃ ┣ 📜useGetCartData.ts
 ┃ ┃ ┃ ┃ ┣ 📜useLocalStorage.ts
 ┃ ┃ ┃ ┃ ┗ 📜useOrderData.ts
 ┃ ┃ ┃ ┣ 📂mutations
 ┃ ┃ ┃ ┃ ┣ 📜useCountView.ts
 ┃ ┃ ┃ ┃ ┗ 📜useReviews.ts
 ┃ ┃ ┃ ┗ 📂queries
 ┃ ┃ ┃ ┃ ┣ 📜useGetBestProducts.ts
 ┃ ┃ ┃ ┃ ┣ 📜useGetHomeProducts.ts
 ┃ ┃ ┃ ┃ ┗ 📜useGetProductById.ts
 ┣ 📂store
 ┃ ┣ 📜cart.ts
 ┃ ┣ 📜dialog.ts
 ┃ ┣ 📜modal.ts
 ┃ ┣ 📜oneProductBuy.ts
 ┃ ┣ 📜order.ts
 ┃ ┣ 📜search.ts
 ┃ ┗ 📜snackbar.ts
 ┣ 📂styles
 ┃ ┣ 📜Common.style.tsx
 ┃ ┣ 📜Global.style.tsx
 ┃ ┣ 📜modal.ts
 ┃ ┣ 📜styled.t.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┣ 📜Cart.interface.ts
 ┃ ┣ 📜Category.interface.ts
 ┃ ┣ 📜IProps.interface.ts
 ┃ ┣ 📜Products.interface.ts
 ┃ ┣ 📜Reviews.interface.ts
 ┃ ┗ 📜User.interface.ts
 ┣ 📂utils
 ┃ ┣ 📜getCreatedIndex.ts
 ┃ ┣ 📜getFormatDate.ts
 ┃ ┣ 📜getKakaoPayReady.ts
 ┃ ┗ 📜getProductsPrice.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜client.ts
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┣ 📜setPoxy.ts
 ┗ 📜setupTests.ts
```

### 2. 서버스 서버 수정

#### 기존

- 기존 서버 구조는 백엔드 개발자가 자바 스프링으로 구축한 `백엔드`서버 와 프론트엔드 개발자가 구축한 `아폴로`서버로 이루어짐
  - 백엔드서버 : 카카오 소설로그인 JWT를 처리하기 위해 사용된 서버
  - 아폴로서버 : 데이터베이스와 연동하여 데이터 CRUD 할수 있는 서버

#### 문제점

- 성능상의 이슈는 없지만 서버를 두개를 켜야한다는 점이 불편했고 백엔드 서버에서는 단순히 로그인 JWT만 처리하는 서버였기 때문에 아폴로 서버와 통합하고자 시도

#### 해결방법

- client에서 REST API를 이용해 카카오 서버로 로그인을 요청하고 'apollo'서버와 통신하면서 JWT를 구현하고자 하였으나 `client` 서버와 `apollo` 서버를 같은 포트를 써야하기 때문에 구현이 어려워서 대안으로 `client`에서 REST API가 아닌 Javascript JDK를 이용하여 `apollo`서버와 통신하지 않고 다이렉트로 카카오 서버와 통신하는 방식으로 변경하였습니다.

### 3. 기타 수정

#### 커밋 메세지 컨벤션

- 기존엔 git 커밋 메세지 컨벤션이 따로 정하지 않아 이번 리팩토링 때 git 커밋 메세지 컨벤션에 맞춰 진행함

```

  feat     : 기능 추가, 삭제, 변경 등 기능 관련 - 코드 수정 발생
  fix      : 오류 개선 혹은 버그 패치 - 코드 수정 발생
  docs     : 문서화 작업 - 코드 수정 없음
  test     : test 관련
  refactor : 코드 리팩토링
  style    : 코드 포맷팅, 디자인, 코드 변경이 없는 경우
  chore    : 빌드 업무 수정, 패키지 매니저 수정

```

#### git 브렌치 명의 모호함

- 기존엔 git 브렌치 명이 각 팀원들의 이름 이니셜로 따와서 브렌치에서 무슨 작업을 하는지 파악이 어려웠고 이번 리팩토링 때 다음과 같이 브렌치명을 수정함

```
- main

- develop

- refactor-client : client에서 작업하기 위해 사용한 브렌치

- refactor-apollo : apollo 서버에서 작업하기 위해 사용한 브렌치

- refactor-kakaomap : 카카오 지도 api를 이용하여 매장위치를 제대로 출력할 수있는지 테스트해보기 위해 사용한 브렌치

```

## 2차 리팩토링 (23.03.27 ~ 23.04.21)

- 전반적으로 관심사 분리와 사용자 경험 개선에 중점을 두고 진행함.

- 기존에 컴포넌트 파일안에 styled 코드를 작성하여 코드길이가 길어져 각 폴더안의 `styles`에 분리시켰고 공통적으로 자주쓰이는 요소는 `src`폴더 하위의 `styled`폴더로 분리시켜 전역으로 사용할수 있게 수정함.

- hook이나 유틸 함수들도 분리시켰음.

### 1. 카카오 소셜 로그인 리팩토링

- mysql의 User 테이블의 pk값을 카카오 로그인 api에서 응답 성공 시 받아온 'kakaoId'값으로 설정

- 클라이언트에서는 'kakaoId'을 로컬스토리지에 저장하여 현재 로그인 중인 유저의 데이터만 확인할 수 있게 구현

#### 관련 PR

[[Apollo, Client] 카카오 소셜로그인 세팅](https://github.com/raw20/kokoafriends/pull/48)

[[Apollo,Client] 카카오 소셜로그인 리팩토링](https://github.com/raw20/kokoafriends/pull/51)

[[Client] 메인 페이지 디자인 수정 & 상품 리뷰하기 리팩토링 외 기타수정 PR](https://github.com/raw20/kokoafriends/pull/52)

### 2. 메인 화면 디자인 수정

- 기존 10개 데이터가 있는 상품 데이터에서 크롤링으로 수집한 100개 상품 데이터로 교체

- 헤더와 메인화면 디자인 수정

- 새로나온 상품 화면에 각각 상품마다 장바구니 버튼 추가

#### 관련 PR

[[Client] 메인 페이지 디자인 수정 & 상품 리뷰하기 리팩토링 외 기타수정 PR](https://github.com/raw20/kokoafriends/pull/52)

#### 데모 영상

![메인화면 데모](https://user-images.githubusercontent.com/62588402/233599104-3c322a6b-7768-4e46-8d30-f3be6d1f9089.gif)

### 3. 상품 리뷰하기 리팩토링

- 리뷰 작성 시 SnackBar형태의 알림 메세지 출력 (성공 / 실패 시 각각 다른 문구 출력)

- 상품 리뷰 시 별점 기능 추가

- 상품 리뷰 시 입력된 input값과 별점 value값을 로컬 스토리지에 저장시켜 새로고침시에도 입력된 값이 유지될 수 있도록 수정

- 상품 수정 / 삭제 시 Dialog 알림 창 출력

- 컴포넌트와 Hook, 함수, 스키마, 등을 각각 관심사에 맞게 분리화

#### 관련 PR

[[Client] 메인 페이지 디자인 수정 & 상품 리뷰하기 리팩토링 외 기타수정 PR](https://github.com/raw20/kokoafriends/pull/52)

#### 데모 영상

![리뷰하기 데모](https://user-images.githubusercontent.com/62588402/233602098-ad0f2e76-70c7-49fd-982d-405d4fa0e311.gif)

### 4. 장바구니 리팩토링

- 장바구니 담기 / 삭제와 같은 기능을 `apollo-server`에서 뮤테이션을 정의하여 관리하였으나 불필요한 서버를 사용하는 것이라 판단하여 `apollo-client`로 자체적으로 클라이언트에서 장바구니 데이터를 상태관리함.

- 장바구니 데이터는 로컬스토리지에 저장되어 새로고침 시에도 데이터가 유지될 수 있게 수정

- 각 상품화면 마다 장바구니 버튼을 추가하였고 두 번클릭시 장바구니에 담긴 상품을 삭제할 수 있게 수정 (버튼 클릭 시 SnackBar형태의 알림 메세지 출력)

- 구매하기 버튼 클릭 시 구매 페이지로 이동

#### 관련 PR

[[Client] 장바구니 리팩토링 외 폴더 구조 변경 PR](https://github.com/raw20/kokoafriends/pull/53)

#### 데모 영상

![장바구니 데모](https://user-images.githubusercontent.com/62588402/233608897-31ca5176-4514-4079-9301-cfada41f9d85.gif)

### 5. 구매 페이지 구현

- 기존에는 구매하기 버튼을 누르면 단순히 데이터베이스 테이블에만 추가되게 구현하였으나 카카오페이 api를 이용하여 실제 구매한것 처럼 구현하고 싶어 클라이언트에서 카카오페이 api를 결제 준비 api를 호출하여 결제 준비 단계까지 구현하였음

- 주문 페이지로 이동되면 배송정보를 입력할 수 있게 사용자 이름, 전화번호, 주소, 배송 메시지를 입력할 수 있게하고 값이 누락 시 구매버튼이 비활성화 됨. 버튼이 활성화 되면 카카오 페이 api를 호출시키기 위해 필요한 파라미터를 보내주면 결제를 가능할 수 있게 해주는 리다이렉트 링크값을 응답 받아와 결제 링크로 이동할수 있게 구현

- 각 입력 값들은 로컬스토리지에 저장되어 (전화번호 제외) 새로고침 되어도 입력 값이 유지될 수 있도록 구현

- 장바구니에 상품이 담겨져 있는 상태에서 상세 상품 페이지에서 구매하기 버튼을 누르면 장바구니에 담긴 상품이 아닌 해당 상품만 구매할수 있도록 하였습니다.

- 결제 승인은 클라이언트에서 처리하기에 어렵다고 판단하여 미구현

#### 관련 PR

[[Client] 카카오 페이 결제 준비 구현 및 번들사이즈 축소 PR](https://github.com/raw20/kokoafriends/pull/54)

#### 데모 영상

![구매하기데모](https://user-images.githubusercontent.com/62588402/233610315-34579ccd-eb7b-4771-be54-6d6236f097cd.gif)

- 카톡 결제 선택 시 확인 메세지

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/233611495-333c4f95-ddce-4909-bb6c-2cdd8b66cdca.PNG" width="450" height="650"/>
</p>

- 결제 준비화면

<p align="center">
<img src="https://user-images.githubusercontent.com/62588402/233612380-203eb942-b523-4750-8009-9d68ec890428.jpg" width="450" height="650"/>
</p>

### 6. 검색 기능 리팩토링

- 기존에는 검색 버튼 클릭 시 바로 검색할 수 있는 화면으로 이동이 가능하게 구현되었으나 네이버나 옥션처럼 검색어 입력 후 필터링 된 결과값만 받아올수 있게 구현하고자 헤더의 위치한 검색창을 이용해 검색할 수 있도록 수정

- 검색된 데이터들을 가격순 또는 인기순으로 필터링 되도록 수정

- 쿼리스트링을 이용하여 검색 기능 리팩토링

#### 관련 PR

[[Client] 검색기능, 반응형 리팩토링 PR](https://github.com/raw20/kokoafriends/pull/55)

#### 데모 영상

![검색 구현](https://user-images.githubusercontent.com/62588402/233613100-8ab7b718-ef09-4aee-9608-3fa2d0e1cfee.gif)

### 7. 번들 사이즈 축소

- Suspense와 lazy를 이용하여 번들 사이즈를 축소시킴으로써 초기 로딩속도가 0.2초 이상 개선

#### 관련 PR

[[Client] 카카오 페이 결제 준비 구현 및 번들사이즈 축소 PR](https://github.com/raw20/kokoafriends/pull/54)

### 8. 반응형 리팩토링

- 리팩토링 하면서 변형된 컴포넌트의 반응형 수정

#### 관련 PR

[[Client] 검색기능, 반응형 리팩토링 PR](https://github.com/raw20/kokoafriends/pull/55)

#### 데모 영상

![반응형 데모](https://user-images.githubusercontent.com/62588402/233614290-337e0f01-b7ba-4a57-bf01-26ac219939c0.gif)

## 배포 링크
