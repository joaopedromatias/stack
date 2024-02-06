class Stack { 
    private elements: unknown[]
    private maxSize: number
    private top: number
    
    constructor(maxSize: number) { 
        this.top = -1
        this.maxSize = maxSize
        this.elements = []
    }

    push(value: unknown){ 
        if (!this.isFull()) { 
            this.top++
            this.elements.push(value)
        } else { 
            console.error('Stack is full')
        }
    }

     pop() { 
        if (!this.isEmpty()) {
            this.top--
            this.elements.pop()
        } else { 
            console.error('Stack is empty')
        }     
     }

    isFull() {
        return this.top === this.maxSize - 1
     }

    isEmpty() { 
        return this.top === -1
     }

     peek() { 
        return this.elements[this.top]
     }
}
