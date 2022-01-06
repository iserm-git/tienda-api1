import {DefaultCrudRepository} from '@loopback/repository';
import {DetalleVenta, DetalleVentaRelations} from '../models';
import {JsonDataDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetalleVentaRepository extends DefaultCrudRepository<
  DetalleVenta,
  typeof DetalleVenta.prototype.cveDetalle,
  DetalleVentaRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(DetalleVenta, dataSource);
  }
}
