import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
::-webkit-scrollbar {
    width: 6px;
    background: ${(props) => props.theme.colors.background};
    height: 10px;
}

::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 14px ${(props) => props.theme.colors.primary};
    border: solid 1px transparent;
    border-radius: 14px;
}

* {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: "Jost", sans-serif;
	list-style:none;
	text-decoration:none;
	scroll-behavior: smooth;
    box-sizing: border-box;
}

body{
    background-color:${(props) => props.theme.colors.background};
}
button{
	cursor: pointer;
}

dialog{
    display: unset;
    position: unset;
}
header, main {
        min-width: 100%;
        max-width: 1620px;

        display:flex;
        flex-direction:column;
        align-items:center;

        padding: 18px 20px;
    }
    main {

        /* margin-top: 60px; */
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
`;
