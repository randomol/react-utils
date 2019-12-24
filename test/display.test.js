const display = require('../display')

test('condition is true, display empty string', () => {
  const actual = display(true)
  expect(actual.display).toBe('')
})

test('condition is false, display is string none', () => {
  const actual = display(false)
  expect(actual.display).toBe('none')
})
