import BinarySearchList from '../algos/BinarySearchList';
import {describe, test, expect} from "@jest/globals"


describe("Binary Search", () => {

  test('should return true', () => {
    expect(BinarySearchList([234,12,34,645,34,45,3,2,76,54,43], 43)).toBe(true);
  });
  
  test('Should return false', () => {
    expect(BinarySearchList([234,12,34,645,34,45,3,2,76,54,43], 4)).toBe(false)
  })
})