// Madison Smith
// 3/10/17
// CSE 373
// TA: Chloe Lathe
// Assignment #6

package sorting;
import java.util.Comparator;


// This class is used to compared two Packet objects. The packets
// are first compared by their majorPacketIndex. A Packet is bigger 
// if their majorPacketIndex is bigger than the other Packet's
// majorPacketIndex. If their major packetIndexs
// are equal, then the Packets are compared by their minorPacketIndexs. 
public class PacketComparator implements Comparator<Packet> {
    
	// This method compares two packets by their majorPacketIndex.
	// If their majorPacketIndexes are equal, then the method will sort
	// the packets by their minorPacketIndexes. Returns an negative int 
	// if the first packet is smaller than the second packet, 0 if the two 
	// packets are equal, or a positive number if the first packet is 
	// greater than the second packet. Takes two Packet objects as 
	// parameters. 
	@Override
    public int compare(Packet p1, Packet p2) {
    	if (p1.getMajorPacketIndex() - p2.getMajorPacketIndex() == 0) {
    		return p1.getMinorPacketIndex() - p2.getMinorPacketIndex();
    	}
        return p1.getMajorPacketIndex() - p2.getMajorPacketIndex();
    }

}
