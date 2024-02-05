# 튼튼-MY HEALTHY DAY
<br>
<div align="center"><img src="https://github.com/gwonminji/tntn/assets/59082464/247e7061-e7bb-40e6-8599-2a4de14b0b5d"></div>
<br>

## 개발기간
2022.01 ~ 진행중

## 프로젝트 정보
React + Typescript를 학습하기 위해 만들어보면서 익히는 개인 웹 포트폴리오

## 배포 주소
https://gwonminji.github.io/tntn/

## 프로젝트 소개
공공데이터포털 API를 활용한 프로젝트.<br>
국민체육진흥공단에서 제공하는 국민체력100 동영상의 운동처방가이드, 체력인증 및 측정방법, 운동처방동영상, 근골격계운동, 생애주기별표준운동, 목적별루틴운동, 동영상 목록 조회 등의 정보를 제공합니다.

## 시작 가이드
### Requirements
For building and running the application you need:
- node v20.10.0
- npm v10.2.3  
### Installation
```
$ git clone https://github.com/gwonminji/tntn.git
$ cd tntn
$ npm install
$ npm start
```

## Stacks
### Environment
<img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">

### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled%20components&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

## 화면 구성
<table>
  <thead>
    <tr>
      <th width="50%">PC</th>
      <th width="50%">MOBILE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://github.com/gwonminji/tntn/assets/59082464/fba825bd-4c26-491c-a393-be8ae4c936ee"></td>
      <td><img src="https://github.com/gwonminji/tntn/assets/59082464/3a8237b8-c142-493e-9a33-dd75a180606a"></td>
    </tr>
    <tr>
      <td colspan="2" align="center">메인 페이지</td>
    </tr>
    <tr>
      <td><img src="https://github.com/gwonminji/tntn/assets/59082464/c0391d3b-7a7e-494c-930b-e13a89aef151"></td>
      <td><img src="https://github.com/gwonminji/tntn/assets/59082464/989e1f3a-9ffd-483d-b657-38ece732fba0"></td>
    </tr>
    <tr>
      <td colspan="2" align="center">운동 영상 목록 페이지</td>
    </tr>
    <tr>
      <td><img src="https://github.com/gwonminji/tntn/assets/59082464/fb0d7ee3-dc82-4805-9fe9-ccadbfa32859"></td>
      <td><img src="https://github.com/gwonminji/tntn/assets/59082464/0adacc75-dbd9-4d05-948f-1773aeb923f0"></td>
    </tr>
    <tr>
      <td colspan="2" align="center">운동 영상 상세 페이지</td>
    </tr>
    <tr>
      <td><img src="https://github.com/gwonminji/tntn/assets/59082464/1b8e4572-d2f9-4f6d-92c5-f2211a2bee91"></td>
      <td><img src="https://github.com/gwonminji/tntn/assets/59082464/2451a978-4422-499f-a05a-82ae96e10a20"></td>
    </tr>
    <tr>
      <td colspan="2" align="center">운동 영상 검색 결과 페이지</td>
    </tr>
  </tbody>
</table>

## 주요 기능
:star:카테고리별 운동 영상 목록 조회 기능
- 1 페이지 당 10개의 운동 영상 목록 제공
- 페이징 처리
  
:star:운동 영상 상세 페이지 조회 기능
- 운동 제목, 영상 제공
  
:star:운동 영상 검색 기능
- 메인 또는 운동 영상 목록 페이지에서 검색바 제공하여 키워드 검색
- 1 페이지 당 10개의 운동 영상 목록 제공
- 페이징 처리
  
:star:추후 지속적으로 디버깅 및 기능 추가 예정

## 아키텍쳐
### 디렉토리 구조
```
┣📦public
┃ ┣ 📜favicon.ico
┃ ┣ 📜index.html
┃ ┣ 📜logo192.png
┃ ┣ 📜logo512.png
┃ ┣ 📜manifest.json
┃ ┗ 📜robots.txt
┗📦src
    ┣ 📂assets
    ┃ ┣ 📂images
    ┃ ┃ ┣ 📂slide
    ┃ ┃ ┃ ┣ 📜main1.jpg
    ┃ ┃ ┃ ┣ 📜main2.jpg
    ┃ ┃ ┃ ┗ 📜main3.jpg
    ┃ ┃ ┗ 📜logo.png
    ┃ ┗ 📂lottie
    ┃ ┃ ┗ 📜loading.json
    ┣ 📂components
    ┃ ┣ 📜Container.tsx
    ┃ ┣ 📜Contents.tsx
    ┃ ┣ 📜DetailBody.tsx
    ┃ ┣ 📜DetailHead.tsx
    ┃ ┣ 📜Footer.tsx
    ┃ ┣ 📜Gnb.tsx
    ┃ ┣ 📜Header.tsx
    ┃ ┣ 📜HeaderLogo.tsx
    ┃ ┣ 📜Layout.tsx
    ┃ ┣ 📜List.tsx
    ┃ ┣ 📜ListItem.tsx
    ┃ ┣ 📜Loading.tsx
    ┃ ┣ 📜MainSwiper.tsx
    ┃ ┣ 📜Paging.tsx
    ┃ ┣ 📜ScrollToTop.ts
    ┃ ┣ 📜SearchBar.tsx
    ┃ ┗ 📜SearchHead.tsx
    ┣ 📂model
    ┃ ┣ 📜component.ts
    ┃ ┗ 📜video.ts
    ┣ 📂pages
    ┃ ┣ 📜Main.tsx
    ┃ ┣ 📜VideoDetail.tsx
    ┃ ┗ 📜VideoList.tsx
    ┣ 📂styles
    ┃ ┣ 📂components
    ┃ ┃ ┣ 📜paging.css
    ┃ ┃ ┗ 📜swiper.css
    ┃ ┣ 📜global-styles.ts
    ┃ ┣ 📜mediaQuery.tsx
    ┃ ┗ 📜theme.ts
    ┣ 📜App.css
    ┣ 📜App.test.tsx
    ┣ 📜App.tsx
    ┣ 📜index.css
    ┣ 📜index.tsx
    ┣ 📜logo.svg
    ┣ 📜react-app-env.d.ts
    ┣ 📜reportWebVitals.ts
    ┗ 📜setupTests.ts
```
