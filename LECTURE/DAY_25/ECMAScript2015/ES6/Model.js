// Class Model
// Instance
// - CRUD
// - get()
// - post()
// - put()
// - delete()

let _datalist = new WeakMap();

class Model {
    constructor(data=[]) {
        _datalist.set(this, data);
    }
    static resetDataList() {}
    init() {}
    getDataList() {
        return _datalist.get(this);
    }
    getData(data) {
        
    }
}