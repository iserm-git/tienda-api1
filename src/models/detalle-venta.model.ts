import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class DetalleVenta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cveDetalle?: number;

  @property({
    type: 'number',
    required: true,
  })
  cveProducto: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DetalleVenta>) {
    super(data);
  }
}

export interface DetalleVentaRelations {
  // describe navigational properties here
}

export type DetalleVentaWithRelations = DetalleVenta & DetalleVentaRelations;
