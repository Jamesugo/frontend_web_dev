class vehicle {
  constructor(name) {
    this.name = name;
  }

  start(){
    return 'voom!'
  }
}

const ford = new vehicle('ford')
const mercedes = new vehicle('mercedes')