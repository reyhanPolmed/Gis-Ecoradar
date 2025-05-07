/**
 * Normalizes a coordinate value that might be stored without proper decimal places
 * or in scientific notation
 *
 * @param coord The coordinate value to normalize
 * @returns The normalized coordinate value
 */
export function normalizeCoordinate(coord: number | string): number {
    // Convert to string if it's a number
    const coordStr = typeof coord === "number" ? coord.toString() : coord
  
    // If it's already a valid number in a reasonable range for lat/long, return it
    const numValue = Number.parseFloat(coordStr)
    if (!isNaN(numValue) && Math.abs(numValue) <= 180) {
      return numValue
    }
  
    // Check for scientific notation (e.g., "-6.888173159957296-9")
    if (coordStr.includes("e") || coordStr.includes("E") || (coordStr.includes("-") && coordStr.lastIndexOf("-") > 0)) {
      try {
        // Try to parse it as a scientific notation
        const scientificValue = Number.parseFloat(coordStr)
        if (!isNaN(scientificValue) && Math.abs(scientificValue) <= 180) {
          return scientificValue
        }
  
        // If the value is still out of range, it might be malformed scientific notation
        // Try to fix common issues like "-6.888173159957296-9" (missing 'e')
        if (coordStr.lastIndexOf("-") > 0) {
          const parts = coordStr.split("-")
          if (parts.length > 2) {
            const base = parts[0] === "" ? `-${parts[1]}` : parts[0]
            const exponent = parts[parts.length - 1]
            const correctedNotation = `${base}e-${exponent}`
            const correctedValue = Number.parseFloat(correctedNotation)
            if (!isNaN(correctedValue) && Math.abs(correctedValue) <= 180) {
              return correctedValue
            }
          }
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        console.warn("Error parsing scientific notation:", coordStr)
      }
    }
  
    // For values with too many decimal places, truncate to 6 decimal places
    if (coordStr.includes(".") && coordStr.split(".")[1].length > 6) {
      const truncated = Number.parseFloat(Number.parseFloat(coordStr).toFixed(6))
      if (!isNaN(truncated) && Math.abs(truncated) <= 180) {
        return truncated
      }
    }
  
    // For values outside the normal range, we need to add a decimal point
    const absCoordStr = coordStr.replace("-", "")
  
    // For longitude (typically needs 3 digits before decimal)
    if (absCoordStr.length >= 5 && Number.parseFloat(absCoordStr) > 1000) {
      // Determine how many digits should be before the decimal
      // For longitude values around 100-180, we need 3 digits before decimal
      const digitsBeforeDecimal = absCoordStr.length <= 7 ? 3 : 2
  
      // Calculate the divisor (10^(length-digitsBeforeDecimal))
      const divisor = Math.pow(10, absCoordStr.length - digitsBeforeDecimal)
  
      // Return the normalized value with the original sign
      return (coordStr.startsWith("-") ? -1 : 1) * (Number.parseFloat(absCoordStr) / divisor)
    }
  
    // For latitude (typically needs 2 digits before decimal)
    if (absCoordStr.length >= 4) {
      // For latitude values around 10-90, we need 2 digits before decimal
      const divisor = Math.pow(10, absCoordStr.length - 2)
  
      // Return the normalized value with the original sign
      return (coordStr.startsWith("-") ? -1 : 1) * (Number.parseFloat(absCoordStr) / divisor)
    }
  
    // If we can't determine how to normalize, return the parsed value
    return numValue
  }
  
  /**
   * Checks if a coordinate pair is valid for display on a map
   *
   * @param lat Latitude value
   * @param lng Longitude value
   * @returns Boolean indicating if the coordinates are valid
   */
  export function isValidCoordinatePair(lat: number | string, lng: number | string): boolean {
    const normalizedLat = normalizeCoordinate(lat)
    const normalizedLng = normalizeCoordinate(lng)
  
    return (
      !isNaN(normalizedLat) && !isNaN(normalizedLng) && Math.abs(normalizedLat) <= 90 && Math.abs(normalizedLng) <= 180
    )
  }
  