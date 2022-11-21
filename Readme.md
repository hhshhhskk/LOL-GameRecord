# LOL-GameRecordSearch

<p align="center">
  <br>
  <img src="/public/kwakGG-main.png">
  <br>
</p>

# 목차
1. 프로젝트 개요/동기
2. 프로젝트 소개
3. 기술 스택
4. 구현 기능
5. 배운점 & 아쉬운 점

## 프로젝트 소개
[Kwak.gq 사이트](https://kwak.gq/)

<p align="justify">
프로젝트 개요/동기
</p>

<p align="center">
제가 네이버보다 많이 들어간 전전 검색 사이트를 내가 한번 만들어 보면 어떨까 하는 생각에 시작하게 되었습니다.
이미 수많은 사이트들이 있지만 저는 필요 기능만 더 직관적으로 보이게 만들어보았습니다.
</p>

<br>

## 기술 스택

|  Html   |   Css   | JavaScript | TypeScript |  React   |
| :-----: | :-----: | :--------: | :--------: | :------: |
| ![html] | ![css]  |   ![js]    |    ![ts]   | ![react] |

<br>

## :office:동작 화면
<details markdown="1">
<summary>펼치기</summary>

* **Main Page**

![메인로고](https://user-images.githubusercontent.com/67895755/202905191-cb9e2075-cd84-4613-b19f-bcc9700b1943.gif)

- framer-motion 라이브러리를 사용하여 메인 페이지의 로고에 애니메이션을 추가
- 라이엇 API를 useQuery를 사용하여 로테이션 목록(16개)을 불러와 화면에 8개씩 보이도록 하고 버튼과 useState를 사용하여 배열 값을 변경해 로테이션 목록을 나누어서 출력

* **Search1 Page**

![전적검색](https://user-images.githubusercontent.com/67895755/202905199-6636c41d-deaf-46d1-bfc0-8f00931274ea.gif)

- framer-motion 라이브러리를 사용하여 소환사정보 박스에 애니메이션을 추가
- useNavigate를 사용하여 URL에 소환사이름을 보냄
- useLocation를 사용하여 URL에 소환사이름을 받아옴
- useRecoil을 사용하여 소환사이름을 저장함
- useQuery를 사용하여 소환사정보를 가져옴
- 박스를 컴포넌트화 하여 관리

* **Search2 Page**

![최근전적,로테이션](https://user-images.githubusercontent.com/67895755/202905221-ecca16a3-bdef-4864-a273-c72ccf7e0554.gif)

* **Login/SignUp Page**

![로그인](https://user-images.githubusercontent.com/67895755/202905234-7609650c-9fd5-447d-bda8-1a5b7577b44c.gif)


<br>

## 배운 점 & 아쉬운 점

<p align="justify">
일단 부딪혀보자는 마음으로 큰 탈 없이 만들어 보았는데 쉽지 않았지만 각종 에러에 부딪히며 수많은 검색으로 리액트 훅의 다양한 기능들과 JS, Css의 제대로 이해하지 못한 부분을 배웠습니다. 그래도 아직까지 반응형 디자인을 제대로 설계하지 못한 것이 아쉬운 부분인 것 같습니다. 
</p>

<br>

<!-- Stack Icon Refernces -->
[html]: src/assets/images/stack/html.svg
[css]: src/assets/images/stack/css.svg
[js]: src/assets/images/stack/javascript.svg
[ts]: src/assets/images/stack/typescript.svg
[react]: src/assets/images/stack/react.svg
