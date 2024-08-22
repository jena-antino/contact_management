export default abstract class BaseRepository {
  abstract model(): any;

  async findOne(predicate: any) {
    const model = this.model();
    const obj = await model.findOne(predicate);
    return obj;
  }
  //create similar utility method
}
