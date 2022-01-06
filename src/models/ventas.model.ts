import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Ventas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cveVenta?: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaVenta: string;

  @property({
    type: 'number',
    required: true,
  })
  cveEmpleado: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ventas>) {
    super(data);
  }
}

export interface VentasRelations {
  // describe navigational properties here
}

export type VentasWithRelations = Ventas & VentasRelations;
