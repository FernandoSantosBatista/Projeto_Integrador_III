export default class Donee {
  constructor(obj) {
    obj = obj || {};
    this.id = obj.id;
    this.name = obj.name;
    this.district = obj.district;
    this.city = obj.city;
    this.email = obj.email;
  }
}
