import {DefaultCrudRepository} from '@loopback/repository';
import {Producto, ProductoRelations} from '../models';
import {JsonDataDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.cveProducto,
  ProductoRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Producto, dataSource);
  }
}
