const { execAsync, execAsyncUntil, killServer } = require('./utils')

require('./config')

describe('Run build', () => {
  beforeAll(async () => {
    await execAsync('npm run build')
    await execAsyncUntil('npm start', {}, 'started server')
  })
  it('should have title', async () => {
    await page.goto('http://localhost:3000', { waitUntil: 'load' })

    const heading2 = await page.waitForSelector('h1')
    const title = await heading2.evaluate((e) => e.textContent, heading2)
    expect(title).toMatch('Welcome to Destack')
  })
  it('should show the editor', async () => {
    await page.goto('http://localhost:3000/builder', { waitUntil: 'load' })

    // TODO fix /builder in production
    await expect(page.$('#gjs')).resolves.not.toBeNull()
    await expect(page.$('#gjs .gjs-pn-btn.fa-code')).resolves.not.toBeNull()
  })
  afterAll(async () => {
    await killServer(3000)
  })
})
