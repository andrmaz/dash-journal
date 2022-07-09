import {createGlobalStyle} from 'styled-components'
import {theme} from '~/themes'

const GlobalStyle = createGlobalStyle`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* GLOBAL STYLES */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        line-height: 1.5;
    }

    body {
        font-family: 'Nunito',
        -apple-system,
        BlinkMacSystemFont,
        avenir next,
        avenir,
        segoe ui,
        helvetica neue,
        helvetica,
        Ubuntu,
        roboto,
        noto,
        arial,
        sans-serif;
    }

    @media (pointer: coarse) {
          html {
            --min-tap-height: 44px;
          }
        }
        ${theme.motion.enabled} {
          html {
            scroll-behavior: smooth;
          }
        }

    /* Set the viewport height on both mobile and desktop. */
    html,
    body {
        height: 100%;
    }
    
    #root {
        min-height: 100%;
        height: 100%;
        /*
        Create a stacking context, without a z-index.
        This ensures that all portal content (modals and tooltips) will
        float above the app.
        */
        isolation: isolate;
        
        --color-base: ${theme.colors.white};
        --color-dark: ${theme.colors.black};
        --color-primary: ${theme.colors.cyan_blue};
        --color-secondary: ${theme.colors.grayish_blue};
        
        --font-size-small: ${theme.fonts.size.small};
        --font-size-medium: ${theme.fonts.size.medium};
        --font-size-large: ${theme.fonts.size.large};

        --font-weight-normal: ${theme.fonts.weight.normal};
        --font-weight-medium: ${theme.fonts.weight.medium};
        --font-weight-bold: ${theme.fonts.weight.bold};

        --font-spacing-dense: ${theme.fonts.spacing.dense};
        --font-spacing-normal: ${theme.fonts.spacing.normal};
        --font-spacing-loose: ${theme.fonts.spacing.loose};

        --font-height-dense: ${theme.fonts.height.dense};
        --font-height-normal: ${theme.fonts.height.normal};
        --font-height-loose: ${theme.fonts.height.loose};

        --border-radius-small: 0.125rem;
        --border-radius-medium: 0.25rem;
        --border-radius-large: 0.5rem;
        --border-radius-x-large: 1rem;
        --border-radius-xx-large: 3rem;
        --border-radius-circle: 50%;
        --border-radius-pill: 9999px;
        --border-radius-tab: 5px 5px 0 0;

        --shadow-x-small: 0 1px 0 var(--color-dark);
        --shadow-small: 0 1px 2px var(--color-dark);
        --shadow-medium: 0 2px 4px var(--color-dark);
        --shadow-large: 0 2px 8px var(--color-dark);
        --shadow-x-large: 0 4px 16px var(--color-dark);
        --shadow-outline: 0 0 0 3px var(--color-primary);

        --z-index-drawer: 700;
        --z-index-dialog: 800;
        --z-index-dropdown: 900;
        --z-index-toast: 950;
        --z-index-tooltip: 1000;
    }
`

export {GlobalStyle}
