class Complaints {
  constructor() {
    this.complaints = []
  }

  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now()

    const complaint =
      type === 'service' ? new ServiceComplaints() : new ProductComplaints()

    return complaint.add({ id, customer, details })
  }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Vlad', 'service', 'недоступен'))
console.log(registry.register('Max', 'product', 'доступен'))
// Service: 1615981888484: Vlad (недоступен)
// Product: 1615984014013: Max (доступен)
