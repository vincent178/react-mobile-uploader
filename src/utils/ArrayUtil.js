
export default class ArrayUtil {

  static reinsert(arr, fromIndex, toIndex) {
    const _arr = arr.slice(0);
    const val = _arr[fromIndex];
    _arr.splice(fromIndex, 1);
    _arr.splice(toIndex, 0, val);
    return _arr;
  }
}