export interface IRepository<T> {
  findById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  create(entity: T): Promise<T>;
}
