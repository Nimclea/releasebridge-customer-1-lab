// Public synthetic regression fixture. Intentionally incorrect, for a future REAL Agent repair.
export function add(a, b) {
  if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) throw new TypeError('safe integers required');
  return a - b;
}