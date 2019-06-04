// Madison Smith
// 3/10/17
// CSE 373
// TA: Chloe Lathe
// Assignment #6


package sorting;


import java.util.Comparator;


// The class contains various methods that can be used to sort Integers 
// from smallest to greatest values.
public class IntegerSorter {
	
	// This method sorts an Integer array from smallest to greatest values
	// using merge sort. This method takes an unsorted Integer array and a 
	// Comparator object that compares the values of various ints. 
    public static void mergeSort(Integer[] array, Comparator<Integer> comparator) { 
        if (1 < array.length) {
        	Integer[] biggerHalf = new Integer[array.length]; 
        	
        	int length = length(array);
        	
        	// split array into smaller half and bigger half
        	int current = 0;
        	for (int i = length/2; i < length; i++) { 
        		biggerHalf[current] = array[i];
        		array[i] = null;
        		current++;
        	}
        	
        	// if more than 1 value in smaller array, divide the smaller array
        	if (array[1] != null) {
        		mergeSort(array, comparator);
        	}
        	
        	// if more than 1 value in larger array, divide the larger array
        	if (biggerHalf[1] != null) {
        		mergeSort(biggerHalf, comparator);
        	}
        	
        	// combine smaller and larger arrays in sorted order
        	array = merge(array, biggerHalf, comparator);
        }
    }
    
        
    // This method merges two sorted Integer arrays together into the first array
    // in order of smallest to biggest values. This method returns the merged sorted
    // Integer array. This method takes two sorted Integer arrays and a Comparator 
    // object that compares the values of various integers. This method assumes that
    // the two array parameters are already sorted. 
    private static Integer[] merge(Integer[] smallerHalf, Integer[] biggerHalf, 
    		Comparator<Integer> comparator) {
    	int s = 0;
    	int l = 0;
    	
    	while (l < length(biggerHalf) || s < length(smallerHalf)) {
    		
    		// if one in smaller array is smaller or larger is null, 
    		// just move smallArray pointer
	    	if (smallerHalf[s] != null && (biggerHalf[l] == null 
	    			|| comparator.compare(smallerHalf[s], biggerHalf[l]) <= 0)) {
	    		s++;

	    	//	if smaller is null, just place larger values at end of small
	    	} else if ((smallerHalf[s] == null && biggerHalf[l] != null)) {
	    		smallerHalf[s] = biggerHalf[l];
	    		l++;
	    		
	    	// if larger is smaller than small, shift all values over and insert
	    	} else if (0 < comparator.compare(smallerHalf[s], biggerHalf[l])){
	    		
	    		// add the value from bigger array to the smaller array
	    		for (int i = length(smallerHalf); s < i; i--) {
	    			smallerHalf[i] = smallerHalf[i-1];
	    		}
	    		smallerHalf[s] = biggerHalf[l]; 
	    		l++;
	    	}
    	}
    	
    	return smallerHalf;
    }
    
    public static void print(Integer[] array) {
		for (int i = 0; i < length(array); i++) {
			System.out.print(array[i] + " ");
		}
		System.out.println();
	}
    
	// This method returns an int that represents the index of an Integer array
    // that contains the first null value in array.
    // The method takes the Integer array as a parameter. 
    private static int length(Integer[] array) {
		int length = 0;
		while (length < array.length && array[length] != null) {
			length++;
		}
		return length;
    }

    
    
    // This method sorts an Integer array from smallest to greatest values 
    // using selection sort. Take the Integer array as a parameter. Also takes
    // a Comparator object that compares the values of various integers.
    public static void selectionSort(Integer[] array,
            Comparator<Integer> comparator) {
    	
    	// initialize current index
    	int current = 0;
    	
    	// initialize current min
    	int min = 0;
    	
    	// for all the values in the array
    	while (current < array.length) {
    		min = current;
    		// of rest of values in array, find min
	    	for (int i = current; i < array.length; i++) {
	    		if (comparator.compare(array[i], array[min]) < 0) {
	    			min = i;
	    		}
	    	}
	    	
	    	// swap min and current
	    	int temp = array[min];
	    	array[min] = array[current];
	    	array[current] = temp;
	    	
	    	// increase current
	    	current++;
    	}
    }
    
    
    // This method sorts an Integer array from smallest to greatest values
    // using insertion sort. Take the Integer array as a parameter. Also takes
    // a Comparator object that compares the values of various integers. 
    public static void insertionSort(Integer[] array,
            Comparator<Integer> comparator) {
        for (int outerIndex = 1; outerIndex < array.length; outerIndex++) {
            Integer currentInt = array[outerIndex];
            int innerIndex = outerIndex - 1;
            while (innerIndex >= 0
                    && comparator.compare(currentInt, array[innerIndex]) < 0) {
                array[innerIndex + 1] = array[innerIndex];
                innerIndex--;
            }
            array[innerIndex + 1] = currentInt;
        }
    }
}
