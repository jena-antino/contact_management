export default abstract class BaseRepository {
  abstract model(): any;

  async findOne(predicate: any) {
    const model = this.model();
    const obj = await model.findOne(predicate);
    return obj;
  }

  async softDelete(predicate: Object) {
    const model = this.model();
    const obj = await model.destroy(predicate);
    return obj;
  }

  async create(data: Object) {
    const model = this.model();
    const obj = await model.create(data);
    return obj;
  }

  async find(prediction: object = {}) {
    const model = this.model();
    const obj = await model.findAll(prediction);
    return obj;
  }
}
