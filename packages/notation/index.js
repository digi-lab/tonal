
export function id (x) { return x }

export var isArr = Array.isArray
export function isNum (x) { return typeof x === 'number' }
export function isStr (x) { return typeof x === 'string' }
export function isDef (x) { return typeof x !== 'undefined' }

// NOTE LETTERS
// ============

// Given a letter, return step
export function toStep (l) {
  var s = 'CDEFGAB'.indexOf(l.toUpperCase())
  return s < 0 ? null : s
}

/**
 * Is a valid step number
 */
export function isStep (d) { return !(d < 0 || d > 6) }

/**
 * Given a step, return a letter
 */
export function toLetter (s) {
  return isStep(s) ? 'CDEFGAB'.charAt(s) : null
}
