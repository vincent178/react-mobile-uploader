
export default class MathUtil {

  static clamp(n, min, max) {
    return Math.max(Math.min(n, max), min);
  }

}