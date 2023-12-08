export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0
  let high = haystack.length

  do {
    const mediumPoint = Math.floor(low + (high - low) / 2)
    const value = haystack[mediumPoint]

    if(value === needle) {
      return true
    } else if (value > needle) {
      high = mediumPoint
    } else {
      low = mediumPoint + 1
    }
  } while (low < high)

  return false
}
