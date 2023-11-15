

class Notify {
    constructor() {
        fetch("/api/friends").then(res=> res.json()).then(res=> {
            console.log(res)
        })
    }
}

const notify = new Notify();