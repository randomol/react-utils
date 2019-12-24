/**
 * use in style prop
 * @param {boolean} condition
 */
const display = (condition) => {
  return { display: condition ? '' : 'none' }
}

module.exports = display
