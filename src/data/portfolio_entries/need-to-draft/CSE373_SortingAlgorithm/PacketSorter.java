// Madison Smith
// 3/10/17
// CSE 373
// TA: Chloe Lathe
// Assignment #6

package sorting;

import java.util.Comparator;


// The class contains various methods that can be used to sort Packet objects
// from smallest to greatest packets.
public class PacketSorter {
	
	// This method sorts an Packet array from smallest to greatest values
	// using merge sort. This method takes an unsorted Packet array and a
	// Comparator object that compares two packets.
    public static void mergeSort(Packet[] array, Comparator<Packet> comparator) {
    	if (1 < array.length) {
        	Packet[] biggerHalf = new Packet[array.length]; 
        	
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
    
    
    // This method merges two sorted Packet arrays together into the first array
    // in order of smallest to biggest packets. This method returns the merged 
    // sorted Packet array. This method takes two sorted Packet arrays and a
    // Comparator object that compares two Packets. This method assumes that
    // the two array parameters are already sorted. 
    private static Packet[] merge(Packet[] smallerHalf, Packet[] biggerHalf,
    		Comparator<Packet> comparator) {
    	
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
    
    // This method returns an int that represents the index of an Packet array
    // that contains the first null value in array.
    // The method takes the Packet array as a parameter. 
    private static int length(Packet[] array) {
		int length = 0;
		while (length < array.length && array[length] != null) { 
			length++;
		}
		return length;
    }


    
    // This method sorts an Packet array from smallest to greatest values 
    // using selection sort. Take the Packet array as a parameter. Also takes
    // a Comparator object that compares two Packets.
    public static void selectionSort(Packet[] array,
        Comparator<Packet> comparator) {
    	
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
    	   	
    	   	// swap values
        	Packet temp = array[min];
    	    array[min] = array[current];
    	   	array[current] = temp;
    	    	
    	   	// increase current
    	   	current++;
        }
    }

    // This method sorts an Packet array from smallest to greatest values
    // using insertion sort. Take the Packet array as a parameter. Also takes
    // a Comparator object that compares the values of various packets. 
    public static void insertionSort(Packet[] array,
            Comparator<Packet> comparator) {
        for (int outerIndex = 1; outerIndex < array.length; outerIndex++) {
            Packet currentPacket = array[outerIndex];
            int innerIndex = outerIndex - 1;
            while (innerIndex >= 0
                    && comparator.compare(currentPacket, array[innerIndex]) < 0) {
                array[innerIndex + 1] = array[innerIndex];
                innerIndex--;
            }
            array[innerIndex + 1] = currentPacket;
        }
    }
}
