import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
*{
    :root{
        --brand1: #101010;
        --brand2: #102347;
        --brand3: rgba(30, 47, 148, 0.8);
        --brand4: #42B5FF;

        --grey0: #000000;
        --grey2: #404040;
        --grey5: #B8B8B8;
        --grey6: #DFDFDF;
        --grey7: #FFFFFF;

        --title1: 5rem;
        --title2: 3.125rem;
        --title3: 2.5rem;
        --title4: 1.875rem;
        --title5: 1.125rem;

        --subTitle1: 1.875rem;
        --subTitle2: 1.25rem;
        --subTitle3: 1rem;

        --text1: 1.875rem;
        --text2: 1.5625rem;
        --text3: 1.25rem;
        --text4: 1.125rem;
        --text5: 1rem;
        --text6: .875rem;
        --text7: .75rem;
        --text8: .625rem;

        --radius-default: 20px;
        --radius-modalContact: 10px;
        --radius-btnCurriculum: 8px;

        --extraBold: 800;
        --bold: 700;
        --semiBold: 600;
        --medium: 500;
        --regular: 400;
        --light: 300;
    }



/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: "Jost", sans-serif;
}
}
`;

export { globalStyles };
