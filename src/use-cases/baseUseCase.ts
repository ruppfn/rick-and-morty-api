import BaseResource from '../models/baseResource';

export default interface BaseUseCase {
  getAll(): Promise<Array<BaseResource>>
}
