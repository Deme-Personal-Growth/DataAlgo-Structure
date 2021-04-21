function traverse(vertex, graph, visited = new Set()) {
    //   Pseudocode:
    // Initialize a set for tracking visited vertices
    // Initialize a queue for tracking traversal
    // Enqueue the start vertex to the queue
    // While the queue is not empty
    //   Dequeue a vertex
    //   For each neighbor of the vertex
    //     If neighbor has not been visited
    //       Add neighbor to visited
    //       Enqueue neighbor
    
    visited.add(vertex) //Tracking our visited nodes, and we push in vertex to start it
    const ourQ = [vertex] //Setting our queue up so that it starts w/ the vertex start with
    
    while(ourQ.length !== 0) {
      let currentNode = ourQ.shift()
      const neighbors = graph[currentNode]
      console.log(currentNode, ourQ)
    
      neighbors.forEach(neighbor => {
        if(!visited.has(neighbor)){
          visited.add(neighbor)
          ourQ.push(neighbor) 
          }
      })
    }
    
    
    
    }
    
    const graph1 = {
      0: [1, 3, 6],
      1: [4, 5],
      2: [5, 7],
      3: [0, 5],
      4: [1, 6],
      5: [1, 2, 3],
      6: [0, 4],
      7: [2]
    }
    
    const graph2 = {
      0: [1, 2, 3],
      1: [0, 2],
      2: [0, 4],
      3: [0],
      4: [2]
    }
    
    
    traverse(0, graph1)
    traverse(0, graph2)
    