import {globalStyle, globalFontFace} from '@vanilla-extract/css'

/* latin */
/* @font-face {
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/cormorantinfant.normal.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    } */
/* latin */
/* @font-face {
    font-family: 'Overpass';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/overpass.italic.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    } */
/* latin */
/* @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/overpass.normal.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    } */
/* latin */
/* @font-face {
    font-family: 'Palanquin';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/palanquin.normal.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }} */
globalFontFace('Cormorant Infant', {
  src: 'local("/fonts/cormorantinfant.normal.woff2")',
})
globalFontFace('Overpass', {
  src: 'local("/fonts/overpass.italic.woff2")',
})
globalFontFace('Overpass', {
  src: 'local("/fonts/overpass.normal.woff2")',
})
globalFontFace('Palanquin', {
  src: 'local("/fonts/palanquin.normal.woff2")',
})

/* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
*/
globalStyle(
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  }
)

/* HTML5 display-role reset for older browsers */
globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
  {
    display: 'block',
  }
)
globalStyle('body', {
  lineHeight: 1,
})
globalStyle('ol, ul', {
  listStyle: 'none',
})
globalStyle('blockquote, q', {
  quotes: 'none',
})
globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: '',
})
globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
})

/* GLOBAL STYLES */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  lineHeight: 1.5,
})
globalStyle('body', {
  fontFamily:
    'Palanquin, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
})
globalStyle('h1, h2', {
  fontFamily:
    'Cormorant Infant, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
})
globalStyle('h3, h4, h5, h6', {
  fontFamily:
    'Overpass, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
})
globalStyle('html', {
  '@media': {
    /* '(pointer: coarse)': {
      [createVar('--min-tap-height')]: '44px',
    }, */
    '(prefers-reduced-motion)': {
      scrollBehavior: 'smooth',
    },
  },
})
globalStyle('html, body', {
  /* Set the viewport height on both mobile and desktop. */
  height: '100%',
  vars: {
    '--color-base': 'hsla(0, 0%, 100%, 1)',
    '--color-dark': 'hsla(0.44,	0.22%, 0.10%, 1)',
    '--color-primary': 'hsla(359, 38%, 65%, 1)',
    '--color-secondary': 'hsla(353, 52%, 90%, 1)',
    '--color-background': 'hsla(0, 0%, 100%, 1)',
    '--color-foreground': 'hsla(0.44,	0.22%, 0.10%, 1)',
    '--color-backdrop': 'hsla(220, 5%, 40%, 0.3)',

    '--font-size-small': '0.875rem',
    '--font-size-medium': '1rem',
    '--font-size-large': '1.125rem',

    '--font-weight-normal': '500',
    '--font-weight-medium': '600',
    '--font-weight-bold': '800',

    '--font-spacing-dense': '-0.015em',
    '--font-spacing-normal': 'normal',
    '--font-spacing-loose': '0.075em',

    '--font-height-dense': '1.4',
    '--font-height-normal': '1.8',
    '--font-height-loose': '2.2',

    '--border-radius-small': '0.125rem',
    '--border-radius-medium': '0.25rem',
    '--border-radius-large': '0.5rem',
    '--border-radius-x-large': '1rem',
    '--border-radius-xx-large': '3rem',
    '--border-radius-circle': '50%',
    '--border-radius-pill': '9999px',
    '--border-radius-tab': '5px 5px 0 0',

    '--shadow-x-small': '0 1px 0 var(--color-dark)',
    '--shadow-small': '0 1px 2px var(--color-dark)',
    '--shadow-medium': '0 2px 4px var(--color-dark)',
    '--shadow-large': '0 2px 8px var(--color-dark)',
    '--shadow-x-large': '0 4px 16px var(--color-dark)',
    '--shadow-outline': '0 0 0 3px var(--color-primary)',

    '--duration-short': '400ms',
    '--duration-medium': '500ms',
    '--duration-long': '600ms',

    '--z-index-drawer': '700',
    '--z-index-dialog': '800',
    '--z-index-dropdown': '900',
    '--z-index-toast': '950',
    '--z-index-tooltip': '1000',
  },
})
globalStyle('#root', {
  minHeight: '100%',
  height: '100%',
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
    */
  isolation: 'isolate',
  /* Disable styles not found warning */
  vars: {
    '--reach-dialog': '1',
  },
})
