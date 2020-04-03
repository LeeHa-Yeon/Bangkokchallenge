import React from "react";
import styled from "styled-components";

function MainLogo() {
    return (
        <Container>
            <Logo>
                방콕챌린지
            </Logo>
        </Container>
    )
}

export default MainLogo

const Container = styled.div`
    display:flex;
    height:500px;
    width:400px;
    margin:auto;
`
const Logo = styled.div`
    font-size:42px;
    font-weight:bold;
    margin: auto;
`