function diffBetweenTwoStrings(source, target) {
	/**  
     * @param source: string
	 * @param target: string
     * @return: string[]
     */
	 
    const stringArray = []

    /**
     * Need an Array of the edits to make source into target
     * 3 Pointers? one on source's character(i) that we are checking
     * then the second on source's next character(ii)
     * 
     * Third Pointer (j) is checking target's  character
     * 
     * 
     * How about flip pointers? Focus on target instead of source
     * 
     * If charAt(i) === charAt(j)
     *    then push char to string array
     *     i ++, ii++, j++
     * 
     * If charAt(i) && charAt(ii) !== charAt(j) 
     *    then we push char(j) w/ +
     *      i + 2
     *      ii + 2
     *      j ++
     * else if  charAt(ii) ===
     *     push w/ -
     *      i+2
     *      ii+2
     *      j++ 
     * 
     * all must run while j less than the length - 1
     */
    

  
  return stringArray
	// your code goes here
}

/*    ''
    ''

*/