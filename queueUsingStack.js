class MyQueue {
    constructor() {
        this.stackIn = [];
        this.stackOut = [];
    }

    push(x) {
        this.stackIn.push(x);
    }

    pop() {
        this._move();
        return this.stackOut.pop();
    }

    peek() {
        this._move();
        return this.stackOut[this.stackOut.length - 1];
    }

    empty() {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }

    _move() {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
    }
}
