// src/index.test.ts
import { merge } from './index';

describe('merge function', () => {
  
  test('should merge standard inputs correctly', () => {
    const col1 = [1, 4, 7];          // Ascending
    const col2 = [2, 5, 8];          // Ascending
    const col3 = [9, 6, 3];          // Descending (Max -> Min)
    
    // Expected: 1, 2, 3, 4, 5, 6, 7, 8, 9
    expect(merge(col1, col2, col3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should handle empty arrays', () => {
    const col1: number[] = [];
    const col2: number[] = [];
    const col3: number[] = [];
    expect(merge(col1, col2, col3)).toEqual([]);
  });

  test('should handle one empty array', () => {
    const col1 = [1, 10];
    const col2: number[] = [];
    const col3 = [5, 2]; // Descending
    
    // Expected: 1, 2, 5, 10
    expect(merge(col1, col2, col3)).toEqual([1, 2, 5, 10]);
  });

  test('should handle negative numbers', () => {
    const col1 = [-10, -5];
    const col2 = [-8, 0];
    const col3 = [5, -2]; // Descending
    
    // Expected: -10, -8, -5, -2, 0, 5
    expect(merge(col1, col2, col3)).toEqual([-10, -8, -5, -2, 0, 5]);
  });

  test('should handle duplicates across arrays', () => {
    const col1 = [1, 2];
    const col2 = [2, 3];
    const col3 = [3, 1]; // Descending
    
    // Expected: 1, 1, 2, 2, 3, 3
    expect(merge(col1, col2, col3)).toEqual([1, 1, 2, 2, 3, 3]);
  });
});