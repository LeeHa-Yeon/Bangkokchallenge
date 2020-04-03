import React from "react";
import styled from "styled-components";

function LoginButton() {
    return (
        <>
            <Button>
                카카오 로그인
            </Button>
        </>
    )
}

export default LoginButton

const Button = styled.button`
    height:50px;
    width:300px;
    margin:200px auto;
    color: #3c1e1e;
    background-color: #ffeb00;
    border: 0;
    display:flex;
    font-size: 16px;
    font-weight: bold;
    justify-content:center;
`
