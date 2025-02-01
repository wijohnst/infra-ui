import { createGlobalStyle } from "styled-components";
import { breakpoints } from "./style-vars";

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
    font-weight: 300;
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
    font-size: 16px;

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

    --color-pipe-green: #23f354;
    --color-pipe-blue: #15cbf6;
    --color-pipe-orange: #ff8e47;

    --debug: lightpink;

    // TYPOGRAPHY
    --typography-font-family: 'Inter', sans-serif;
    --typography-font-size: 16px;

    // GRADIENTS
    --pipe-gradient-y: linear-gradient(90deg, var(--color-pipe-green) 0%, var(--color-pipe-blue) 50%, var(--color-pipe-orange) 100%);

    --pipe-gradient-x: linear-gradient(180deg, var(--color-pipe-green) 0%, var(--color-pipe-blue) 50%, var(--color-pipe-orange) 100%);

    // MISC
    --box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    p {
        line-height: 1.6; /* Comfortable line spacing */
        color: #333; /* Dark gray for reduced eye strain compared to pure black */
        text-align: justify; /* Justify text for a clean, aligned look */
        max-width: 65ch; /* Limit paragraph width for better readability */
        word-spacing: 0.05em; /* Slightly increase word spacing */
    }

    @media (max-width: ${breakpoints.SM}) {
        p, li, a {
            font-size: 14px; /* Adjust for smaller screens */
            margin-bottom: 1em; /* Reduce spacing */
        }
    } 
}

h1 {
    font-size: 2rem;
    font-weight: 900;
}

h2{
    font-size: 1.5rem;
    font-weight: 900;
}

h3{
    font-size: 1.25rem;
    font-weight: 900;
}

h4{
    font-size: 1rem;
    font-weight: 900;
}
`;

export default GlobalStyle;
