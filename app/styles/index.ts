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
        --color-base: ${theme.colors.base};
        --color-grayish_blue: ${theme.colors.grayish_blue};
        --color-cyan_blue: ${theme.colors.cyan_blue};
        --color-green: ${theme.colors.green};
        --color-blue_magenta: ${theme.colors.blue_magenta};
        --color-brown: ${theme.colors.brown};
        --color-watermelon: ${theme.colors.watermelon};
    }
`

export {GlobalStyle}
