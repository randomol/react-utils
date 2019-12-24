const classFactory = require('../class-factory')

test('no pass params to \'base\' inst, return \'base\'', () => {
  const inst = classFactory('base')
  expect(inst()).toBe('base')
})

test('pass \'item\' to \'base\' inst, return \'base-item\'', () => {
  const inst = classFactory('base')
  expect(inst('item')).toBe('base-item')
})
