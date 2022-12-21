# 코코아 프렌즈 웹 반응형 쇼핑몰 구현

### 🔹프로젝트 설명

- 개인 스터디를 통해 카카오프렌즈샵을 예시로 구현하는 쇼핑몰입니다.
- 쇼핑몰의 기능은 사용자 입장에서는 아래와 같은 페이지 구성입니다.
- 기간 : 22.09.02 ~ 22.11.14

### 🔹조원 및 역할

- 정찬욱: 프론트엔드 기능 담당 및 백엔드 보조
- 박민규 : 백엔드 기능 및 데이터 파이프라인, 배포

### 🔹페이지구성

- 마이페이지

  - 유저 정보
  - 최근 구매 목록

- 메인페이지

  - 검색
  - 게시판
  - 카카오 소셜 로그인
  - 베스트

- 상세페이지
  - 정보출력
  - 좋아요
  - 조회수
  - 장바구니
  - 구매하기
  - 댓글

**비회원일시 - 로그인창 보내기**

## 🔹개발환경
- kakao login api
- IntelliJ
- Visual Studio Code
- HeidiSql
- Sourcetree
- GitHub

## 🔹성능 테스팅 도구

- Postman


### 🔹백엔드

#### Spring boot

- JAVA 11

- Spring MVC

- Spring Boot Security

- Spring Data JPA

- JWT

- Oauth

-thymeleaf

- lombok

- devtools

- mysql-connector-java

- gson

- springsecurity5

#### Build tool

- Gradle

#### Database

- Mysql

- RDS


### 🔹프론트엔드

#### 언어

- Typescript

- Javascript

#### 주요 라이브러리

- React

- React-Router

- Styled-Component

- Apollo-client

- axios

#### Specification

- GraphQL

## 🔹Diagram
![카카오 로그인 api 다이어그램](https://user-images.githubusercontent.com/81221555/200505646-60d22ea4-5d3a-431c-9f6e-c2351fe2d28e.jpg)

## 🔹DB테이블 정의
[DB 테이블 정의.csv](https://github.com/raw20/kokoafriends/files/9958887/DB.csv)



## 🔹ERD
![image](https://user-images.githubusercontent.com/81221555/200505038-4bdcbeb7-5471-4b28-be93-4ddef6bea822.png)


## 📋 카카오 로그인 API 문서
- [카카오 로그인 API](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api)

## 📋 주요 키워드

- git repository 다운로드 후 로컬환경에서 서버 실행 테스트 및 유저 데이터 검수 작업<박민규>

- Web Server 구성
AWS EC2의 아마존 Ubuntu 기반 위에 Spring의 파일을 jar로 배포 및 React와 Apollo 서버 실행 <박민규>

## 📋 실제 화면

### 메인화면
<img src="https://user-images.githubusercontent.com/62588402/208840232-8ab7433d-b41e-4581-89da-8a2e6b9b0944.jpeg" width="200" height="400"/>



### 베스트 상품

![image38](https://user-images.githubusercontent.com/62588402/208840373-0fec2a5d-297b-41f5-bc2c-eb1338f047c1.jpeg)

### 상품 상세페이지



### Mypage.tsx

![image46](https://user-images.githubusercontent.com/62588402/208840603-eb1fec18-db89-47a9-b5e1-13d15d56765c.jpeg)

### 
