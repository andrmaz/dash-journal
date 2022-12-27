import {getViolations, injectAxe} from 'axe-playwright'

import fs from 'fs'

/**
 * @type {import('@storybook/test-runner').TestRunnerConfig}
 */
module.exports = {
  setup() {
    fs.mkdir(process.cwd() + '/app/__a11y__/', {recursive: true}, err => {
      if (err) throw err
    })
  },
  async preRender(page) {
    await injectAxe(page)
  },
  async postRender(page, context) {
    const violations = await getViolations(page, '#root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    })
    await new Promise((resolve, reject) => {
      fs.writeFile(
        process.cwd() + `/app/__a11y__/${context.id}.json`,
        JSON.stringify(violations, null, 2),
        err => {
          if (err) reject(err)
          resolve()
        }
      )
    })
  },
}
