import { globalStyle, globalFontFace } from '@vanilla-extract/css'

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
