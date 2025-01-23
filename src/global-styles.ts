import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
#root,html, body, div, span, applet, object, iframe,
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
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
    font-family: var(--typography-font-family);
    font-size: 16px;  
	line-height: 1;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

#root, html, body {
    height: 100%;

    box-sizing: border-box;

    // LAYOUT SIZES
    --layout-size-xs : .1rem; // 1.6 px @ 16px base
    --layout-size-sm : .25rem; // 4px @ 16px base
    --layout-size-md : .5rem; // 8px @ 16px base
    --layout-size-lg : .75rem; // 12px @ 16px base
    --layout-size-xl : 1rem; // 16px @ 16px base
    --layout-size-xxl : 1.25rem; // 20px @ 16px base

    // COLORS
    --technical-blue: #C5EEFF;
    --technical-light-gray: #D9D9D9;
    
    --color-primary: #0800fc;
    --color-secondary: #fe0000;
    --color-neutral: #FFFFFF;
    --color-text: #000000;

    // TYPOGRAPHY
    --typography-font-family: 'Roboto', sans-serif;
}

h1 {
    font-size: 2rem;
    font-weight: 500;
}
`;

export default GlobalStyle;
