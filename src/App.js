import React from 'react';
import styled, {css} from 'styled-components'


/*
  CSS의 표준권고안에 따르면 크기 단위는 절대단위와 상대단위로 구분됩니다.
- 절대단위 : in, cm, mm, pt, pc가 있으며 출력장치(모니터)의 물리적 속성을 아는 경우 효율적
- 상대단위 : em, ex, px, %가 있으며 기종간, 플랫폼 간의 호환성을 유지하는데 유리

- em : font_size, 해당폰트의 대문자 M의 너비를 기준으로 함.
- ex : x-height, 해당폰트의 소문자 x의 높이를 기준으로 함.
- px : pixel, 표시장치(모니터)에 따라서 상대적인 크기를 가짐.
- %  : percent, 기본글꼴의 크기에 대하여 상대적인 값을 가짐.
- pt  : point, 일반 문서(워드 등)에서 많이 사용하는 단위

point  pixels    Ems  Percent
12pt	  16px	   1em	 100%
 */

 /*
 1. margin: 10px 20px 15px 5px;  // 상하좌우 , 시계방향
 2. margin: 10px 5px;     // 상하의 margin 이 같고, 좌우의 margin 이 같을 때
 3. margin: 10px 5px 25px;  // 좌우는 같은데, 상하가 다를때
                            // margin-top, margin-bottom, 좌우마진

정리하면, 아래 4가지.
margin: [margin-top] [margin-right] [margin-bottom] [margin-left];
margin: [margin-top] [margin-left = margin-right] [margin-bottom];
margin: [margin-top=margin-bottom] [margin-left = margin-right];
margin: [margin-top = margin-bottom = margin-left = margin-right];
                            
 */


const Button = styled.button`
  background: transparent;  // 배경색 투명
  border-radius: 3px;       // 버튼 모서리 둥근거
  border: 2px solid palevioletred;    // 테두리 굵기와 색깔
  color:palevioletred;   // 글자색
  margin:0.5em 1em; 
  padding: 0.25em 1em;

${props=>
  props.primary5 && css`
  background: palevioletred;
  color:white;
  `}
`;


const Container = styled.div`
text-align:center;
`

function App() {
  return (
    <Container>
      <Button>Normal Button2</Button>
      <Button primary5>Primary Button</Button>
    </Container>
  );
}

export default App;
