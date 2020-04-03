import React from "react";
import styled from "styled-components";
import LoginButton from "../../atoms/LoginButton"
import Logo from "../../atoms/MainLogo"

function LoginPage() {
    return (
        <Container>
            <Logo />
            <LoginButton />
        </Container>
    )
}

export default LoginPage;

const Container = styled.div`
    height:100%;
    width:100%;
`