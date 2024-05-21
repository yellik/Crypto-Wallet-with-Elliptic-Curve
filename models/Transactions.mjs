import { v4 as uuidv4 } from 'uuid'
export default class Transaction {
    constructor({sender, recipient, amount}) {
        this.id = uuidv4().replaceAll('-', '');
        this.outputMap = this.createOutputMap({ sender, recipient, amount});
        this.inputMap = this.createInputMap({ sender, outputMap: this.outputMap});
    }

    createOutputMap({ sender, recipient, amunt}) { 
        const outputMap = {}
        
    }

    createInputMap({ sender, outputMap}) {}
}