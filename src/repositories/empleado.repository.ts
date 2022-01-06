import {DefaultCrudRepository} from '@loopback/repository';
import {Empleado, EmpleadoRelations} from '../models';
import {JsonDataDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.cveEmpleado,
  EmpleadoRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Empleado, dataSource);
  }
}
