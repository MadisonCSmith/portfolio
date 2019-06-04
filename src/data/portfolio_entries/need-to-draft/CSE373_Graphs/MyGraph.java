// Madison Smith
// 2/22/17
// CSE 373
// TA: Chloe Lathe
// Assignment #4


import java.util.*; 

// The MyGraph class implements the Graph interface and acts as a graph.
// Ignores edges with negative weights.
public class MyGraph implements Graph {
	private Edge[][] matrix;
	private Map<Vertex, Integer> map; 

	// Makes a MyGraph object from a collection of Vertex objects and a 
	// collection of Edge objects. First parameter is the collection of 
	// Vertex objects. Second parameter is the collection of Edge objects.
	// The graph will ignore edges with negative weights.
	// Throws IllegalArgumentException if there are not any vertices in
	// the first parameter. Throws an IllegalArgumentException if there are
	// the two edges, in between the same vertices, in same the direction, 
	// with different weights.
    public MyGraph(Collection<Vertex> v, Collection<Edge> e) {
    	if (v.size() == 0) { 
    		throw new IllegalArgumentException();
    	}
    	matrix = new Edge[v.size()][v.size()]; 
    	map = new HashMap<Vertex, Integer>();
  
    	Iterator<Vertex> vIterator = v.iterator();
    	int currentIndex = 0;
    	while (vIterator.hasNext()) {
    		Vertex vertex = vIterator.next(); 
    		Vertex internalVertex = new Vertex(vertex.getLabel());
    		if (!map.containsKey(internalVertex)) {
    			map.put(internalVertex, currentIndex);
    			currentIndex++;
    		}
    	}
    	
    	Iterator<Edge> eIterator = e.iterator(); 
    	while (eIterator.hasNext()) {
    		Edge edge = eIterator.next();
    		Edge internalEdge = new Edge(edge.getSource(), 
    				edge.getDestination(), edge.getWeight());
    		if (map.get(internalEdge.getSource()) != null 
    				&& map.get(internalEdge.getDestination()) != null 
    				&& internalEdge.getWeight() >= 0) {
    			Edge currentLocation = matrix[map.get(internalEdge.getSource())]
    					[map.get(internalEdge.getDestination())]; 
    			if (currentLocation != null) {
    				
    				if (!currentLocation.equals(internalEdge)) {
    					throw new IllegalArgumentException();
    				}
    				
    			} else {
    				matrix[map.get(internalEdge.getSource())]
    						[map.get(internalEdge.getDestination())] = internalEdge; 
    			}
    		}	
    	}
    }

    // Returns a collection of all the vertexes in the graph.
    public Collection<Vertex> vertices() {
    	Iterator<Vertex> iterator = map.keySet().iterator();
    	Collection<Vertex> collection = new HashSet<Vertex>();
    	while (iterator.hasNext()) {
    		collection.add(new Vertex(iterator.next().getLabel()));
    	}
    	return collection; 
    }

    // Returns a collection of all the edges in the graph
    public Collection<Edge> edges() {
    	Collection<Edge> collection = new HashSet<Edge>();
    	for (int i = 0; i < map.keySet().size(); i++) { 
    		for (int j = 0; j < map.keySet().size(); j++) {
    			if (matrix[i][j] != null) {
    				collection.add(new Edge(matrix[i][j].getSource(), 
    						matrix[i][j].getDestination(), matrix[i][j].getWeight()));
    			}
    		}
    	}
    	return collection;
    }

    // Finds all vertexes that are adjacent to the given vertex.
    // Takes the Vertex object that you want adjacent vertexes to as an parameter.
    // Returns a collection of Vertex objects that are adjacent to the Vertex object
    // given as a parameter. Returns an empty collection if no vertexes that are 
    // adjacent to the given Vertex object. Throws an IllegalArgumentException if 
    // the given vertex does not exist.
    public Collection<Vertex> adjacentVertices(Vertex v) {
    	Vertex internalV = new Vertex(v.getLabel());
    	Collection<Vertex> collection = new HashSet<Vertex>();
    	if (map.get(internalV) == null) {
    		throw new IllegalArgumentException();
    	}
    	for (int i = 0; i < map.keySet().size(); i++) { 
    		int vIndex = map.get(internalV);
    		Edge current = matrix[vIndex][i]; 
    		if (current != null) {
    			collection.add(new Vertex(current.getDestination().getLabel())); 
    		}
    	}
    	return collection;
    }

    // Returns the cost of the edge between adjacent vertexes. A Vertex object
    // is taken as the first parameter. The adjacent vertex to the first parameter
    // is taken as the second parameter as a Vertex object. If there is no edge
    // between the two vertexes, -1 is returned. Throws an IllegalArugmentException
    // if either parameter does not exist.
    public int edgeCost(Vertex a, Vertex b) {
    	if (map.get(a) == null || map.get(b) == null) {
    		throw new IllegalArgumentException();
    	}
    	Vertex internalA = new Vertex(a.getLabel());
    	Vertex internalB = new Vertex(b.getLabel());
    	
    	int aIndex = map.get(internalA); 
    	int bIndex = map.get(internalB);
	    if (matrix[aIndex][bIndex] != null && matrix[bIndex][aIndex] == null) {	
	    	return matrix[aIndex][bIndex].getWeight();
	    }
	    return -1;
    }

}