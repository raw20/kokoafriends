# 코코아 프렌즈 웹 반응형 쇼핑몰 구현

### 🔹프로젝트 설명

- 개인 스터디를 통해 카카오프렌즈샵을 예시로 구현하는 쇼핑몰입니다.

- 기간 : 22.09.02 ~ 22.11.14

  (리팩토링) 23.01.26 ~

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

- thymeleaf

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

- GraphQL

  하나의 엔드포인트만을 사용하여 요청하는 쿼리에따라 다른 응답을 반환할 수 있도록 설정 <정찬욱>

- Apollo-Cient

  state 관리를 위해 사용 <정찬욱>

## 📋 실제 화면

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

### 보완해야할 점

#### 공통

- 기존 자바 스프링으로 구현한 server와 apollo server 통합

- 로그인
  
  - 여러명이 접속해 있을때 마이페이지에서 다른 유저의 정보가 출력되는 문제 발생을 수정
  
  -  jwt 인증 방식 변경 :  REST API --> Apollo Server 

#### 정찬욱 (프론트엔드)

- 폴더 구성 및 컴포넌트 분류 미흡

  - Page폴더와 Component 폴더가 있음에도 Page폴더 안에 또 다른 Component가 존재
 
  - 한 컴포넌트에 300줄이상 코드가 작성되어 가독성이 떨어지고 다른 컴포넌트로 분리 미흡으로 인해 수정할 예정

- 결제화면 페이지

  - 구매하기 누르면 주소입력이 들어간 등 결제화면 페이지가 존재하지 않아 아쉬움이 남았고 이를 수정할 예정
 
- 댓글

  - 댓글 수정기능 추가 및 댓글 입력이나 수정/삭제 시 한번 더 확인시켜주는 Modal창을 보여주게 수정할 예정
 
- 디자인 수정

- 매장찾기 추가

   - 데이터엔지니어가 크롤링한 데이터(위도,경도)를 토대로 Google Map API를 이용하여 지도기능 추가할 예정

#### 박민규

### 1차 리팩토링 (23.01.26 ~ 23.?.?)
