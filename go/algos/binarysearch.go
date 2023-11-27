package main

import (
	"sort"
)

// BinarySearch returns a bool value.
// Based on if the needle is found in the haystack
func BinarySearch(haystack []int32, needle int32) bool {
	sort.SliceStable(haystack, func(i, j int) bool { return haystack[i] < haystack[j] })

	var l int32 = 0
	var h = int32(len(haystack))

	for l < h {
		m := l + (h-l)/2
		cm := m
		v := haystack[cm]

		if v == needle {
			return true
		} else if v > needle {
			h = cm
		} else {
			l = cm + 1
		}
	}
	return false
}
