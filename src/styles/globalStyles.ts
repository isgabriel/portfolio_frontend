import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

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
}

body{
    background-color:${(props) => props.theme.colors.background};
}
button{
	cursor: pointer;
}
`;
