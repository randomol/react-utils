const selectEventHandler = require('../select-event-handler')

const name = 'value'
const parent = document.createElement('ul')
const target = document.createElement('li')
target.dataset[name] = '123'
parent.appendChild(target)
document.body.appendChild(parent)

describe('event has path property', () => {
  test('select item value is 123', () => {
    const event = {
      currentTarget: parent,
      nativeEvent: {
        path: [target, parent]
      }
    }
    let actual
    function callback (v) {
      actual = v
    }
    const handler = selectEventHandler(name, callback)
    handler(event)
    expect(actual).toBe('123')
  })
})

describe('event no path property', () => {
  test('select item value is 123', () => {
    const event = {
      currentTarget: parent,
      nativeEvent: {
        target
      }
    }
    let actual
    function callback (v) {
      actual = v
    }
    const handler = selectEventHandler(name, callback)
    handler(event)
    expect(actual).toBe('123')
  })
})
