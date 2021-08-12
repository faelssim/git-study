class MyPromise {
    constructor(fn) {
        this.state = 'pending'
        this.value = this.reason = undefined
        const resolve = (value) => {
            this.state = 'fulfilled'
            this.value = value
        }
        const reject = (reason) => {
            this.state = 'rejected'
            this.reason = reason
        }
        try {
            fn(resolve, reject)
        } catch(e) {
            reject(new TypeError('构造函数参数不是一个function'))
        }
    }
    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value)
        }
        if (this.state === 'rejected') {
            onRejected(this.reason)
        }
    }
} 