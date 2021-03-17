class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val){
        this.values.push(val)
        let childIndex = this.values.length - 1

        while( this.values[childIndex] > this.gettingParentValue(childIndex) ) {
            const parentIndex = this.gettingParentIndex(childIndex)
            this.swap(childIndex, parentIndex)

            childIndex = parentIndex
        }

        return this.values
    }

    gettingParentIndex = (i) => {
       return Math.floor( (i - 1) / 2)
    }

    gettingParentValue = (i) => {
        return this.values[this.gettingParentIndex(i)]
    }

    swap = (a, b) => {
        [this.values[a], this.values[b]] = [this.values[b], this.values[a]]
    }

    extractMax(){
        const max = this.values[0]

        this.swap(0, this.this.values.length - 1)
        this.values.pop(0)

        let parentIndex = 0
        let leftChildIndex = 2 * parentIndex + 1
        let rightChildIndex = 2 * parentIndex + 2
        let parentVal = this.values[parentIndex]
        let leftChildVal = this.values[leftChildIndex]
        let rightChildVal = this.values[rightChildIndex]

        while (leftChildIndex !== undefined) {
            let maxChildIndex = leftChildIndex
            let maxChildVal = this.values[maxChildIndex]

            if ( rightChildInex !== undefined && rightChildVal > leftChildVal){
                maxChildIndex = rightChildIndex
                maxChildVal = rightChildVal
            }

            if (parentVal < maxChildVal){
                this.swap(parentIndex, maxChildIndex)
                parentIndex = maxChildIndex
                leftChildIndex = 2 * parentIndex + 1
                rightChildIndex = 2 * parentIndex + 2
                parentVal = this.values[parentIndex]
                leftChildVal = this.values[leftChildIndex]
                rightChildVal = this.values[rightChildIndex]
              } else {
                break
              }
              
        }
    }
}


const maxHeap = new MaxBinaryHeap()
maxHeap.insert(10)
maxHeap.insert(20)
maxHeap.insert(30)
maxHeap.insert(40)