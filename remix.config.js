/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  future: {
    unstable_cssModules: true,
    unstable_vanillaExtract: true,
    unstable_cssSideEffectImports: true,
  },
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [/^global.css.ts*/],
}
