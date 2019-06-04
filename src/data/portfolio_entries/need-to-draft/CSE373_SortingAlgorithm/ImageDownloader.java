// Madison Smith
// 3/10/17
// CSE 373
// TA: Chloe Lathe
// Assignment #6

package sorting;

// This class takes a series of Packets from the Packet Receiver class,
// sorts the packets using the Packet Sorter class, and uses PacketRenderer
// to render an image titled finalImage.jpg
public class ImageDownloader {
    public static void main(String[] args) {
        // get the packets
    	Packet[] packets = PacketReceiver.receivePackets(); 
    	
    	PacketComparator comparator = new PacketComparator();
        
    	// sort the packets
    	// PacketSorter.mergeSort(packets, comparator);
    	PacketSorter.selectionSort(packets, comparator);
    	
        String imageOutputFilename = "finalImage.jpg";
        
        // render the image
        PacketRenderer.renderImage(packets, imageOutputFilename);
    }

}
