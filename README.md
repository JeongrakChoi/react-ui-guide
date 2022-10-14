# react-ui-guide

React 환경 UI 가이드 페이지 활용 및 개인 공부용  
https://jeongrakchoi.github.io/react-ui-guide

## 개요

기존 셀렉터를 이용해 직접적인 DOM 조작 및 인터렉션 작업을 한 방식에서  
상태 변화에 의한 방식으로 전환 및 학습하기 위함.

## 터미널

```
최초 실행시
> npm install
> npm start

빌드
> npm run build

gh-pages 배포
> npm run deploy
```

## 메모

- 깃허브 페이지에 호스팅 하기 위한 `gh-pages` 라이브러리 추가
- 404.html 임의 추가 후, index.html로 리다이렉션하는 코드 추가(미 설정시, 새로고침하면 404페이지 뜸)  
  깃허브 페이지에서 spa 지원하지 않기 때문  
  (https://iamsjy17.github.io/react/2018/11/04/githubpage-SPA.html)
