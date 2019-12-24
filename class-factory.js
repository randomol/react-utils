/**
 * base className factory
 * @param {*} rootName
 * - example
 * ```
 * const cls = clsFactory('base')
 * cls('item') // return base-item
 * ```
 */
function clsFactory (rootName) {
  return (name) => rootName + (name ? `-${name}` : '')
}

module.exports = clsFactory
