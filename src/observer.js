class Observer {
  constructor() {
    Reflect.defineProperty(this, 'observers', {
      value: {},
      writable: true
    })
  }

  // 注册观察者
  register(type, callback) {
    if(!type || !callback) {
      return
    }

    if(!this.observers[type]) {
      this.observers[type] = []
    }

    this.observers[type].push(callback)
    return this
  }

  // 解绑观察者
  unregister(type, callback) {
    if(!type) { // 如果没有传类型，就解绑所有观察者
      this.observers = {}
      return this
    }

    if(!callback) { // 如果没有传解绑函数，就解绑该类型的所有函数
      this.observers[type] = []
      return this
    }

    this.observers[type] = this.observers[type].filter(item => item !== callback)
    return this
  }

  // 通知所有观察者进行变化
  notify(type, params) {
    const {observers} = this

    if(observers && observers[type]) {
      observers[type].forEach(item => item && item(params))
    }

    return this
  }
}
