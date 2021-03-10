class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val){
        this.values.push(val)
        let childIndex = this.values.length - 1

        while( this.values[childIndex] > this.gettingParentValue(childIndex) ) {
            const parentIndex = this.gettingParentIndex(childIndex)
            this.swap(this.values[childIndex], this.values[parentIndex])

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
        [a, b] = [b, a]
    }
}

const maxHeap = new MaxBinaryHeap()
maxHeap.insert(10)
maxHeap.insert(20)
maxHeap.insert(30)
maxHeap.insert(40)