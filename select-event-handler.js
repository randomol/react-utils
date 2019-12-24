/**
 * custom select component click handler for parent
 * @param {string} dataName data-{name}
 * @param {*} callback callback on click useful target
 * - for example
 * ```
 * <ul onClick={selectEventHandler('value', callback)}>
 *  <li data-value="0" />
 *  <li data-value="1" />
 * </ul>
 * ```
 */
function selectEventHandler (dataName, callback) {
  return e => {
    const path = e.nativeEvent.path || (e.nativeEvent.composedPath && e.nativeEvent.composedPath()) || composedPath(e.nativeEvent.target)
    const handlerIndex = path.indexOf(e.currentTarget)
    const findItems = path.slice(0, handlerIndex)
    let value
    for (let i = 0; i < findItems.length; i++) {
      const target = findItems[i]
      if (target.dataset && target.dataset[dataName]) {
        value = target.dataset[dataName]
        break
      }
    }
    if (value) {
      callback(value)
    }
  }
}
// polyfill e.path
function composedPath (el) {
  var path = []
  while (el) {
    path.push(el)
    if (el.tagName === 'HTML') {
      path.push(document)
      path.push(window)
      return path
    }
    el = el.parentElement
  }
}

module.exports = selectEventHandler
