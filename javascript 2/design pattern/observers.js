class subject{
    constructor(){
        this.observers = new set()
    }

    add(orbserve){
        this.observers.add(observer)
    }

    remove(observer){
        this.observers.delete(observer)
    }

    notify(context){
        for (let observer of this.observers){
            observer.update(context)
        }
    }
}

class observer{
    constructor () {}
    update() {
        
    }
}