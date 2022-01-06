import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {DetalleVenta} from '../models';
import {DetalleVentaRepository} from '../repositories';

export class DetalleVentaController {
  constructor(
    @repository(DetalleVentaRepository)
    public detalleVentaRepository : DetalleVentaRepository,
  ) {}

  @post('/detalle-ventas', {
    responses: {
      '200': {
        description: 'DetalleVenta model instance',
        content: {'application/json': {schema: getModelSchemaRef(DetalleVenta)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleVenta, {
            title: 'NewDetalleVenta',
            exclude: ['cveDetalle'],
          }),
        },
      },
    })
    detalleVenta: Omit<DetalleVenta, 'cveDetalle'>,
  ): Promise<DetalleVenta> {
    return this.detalleVentaRepository.create(detalleVenta);
  }

  @get('/detalle-ventas/count', {
    responses: {
      '200': {
        description: 'DetalleVenta model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(DetalleVenta) where?: Where<DetalleVenta>,
  ): Promise<Count> {
    return this.detalleVentaRepository.count(where);
  }

  @get('/detalle-ventas', {
    responses: {
      '200': {
        description: 'Array of DetalleVenta model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DetalleVenta, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DetalleVenta) filter?: Filter<DetalleVenta>,
  ): Promise<DetalleVenta[]> {
    return this.detalleVentaRepository.find(filter);
  }

  @patch('/detalle-ventas', {
    responses: {
      '200': {
        description: 'DetalleVenta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleVenta, {partial: true}),
        },
      },
    })
    detalleVenta: DetalleVenta,
    @param.where(DetalleVenta) where?: Where<DetalleVenta>,
  ): Promise<Count> {
    return this.detalleVentaRepository.updateAll(detalleVenta, where);
  }

  @get('/detalle-ventas/{id}', {
    responses: {
      '200': {
        description: 'DetalleVenta model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DetalleVenta, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DetalleVenta, {exclude: 'where'}) filter?: FilterExcludingWhere<DetalleVenta>
  ): Promise<DetalleVenta> {
    return this.detalleVentaRepository.findById(id, filter);
  }

  @patch('/detalle-ventas/{id}', {
    responses: {
      '204': {
        description: 'DetalleVenta PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleVenta, {partial: true}),
        },
      },
    })
    detalleVenta: DetalleVenta,
  ): Promise<void> {
    await this.detalleVentaRepository.updateById(id, detalleVenta);
  }

  @put('/detalle-ventas/{id}', {
    responses: {
      '204': {
        description: 'DetalleVenta PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detalleVenta: DetalleVenta,
  ): Promise<void> {
    await this.detalleVentaRepository.replaceById(id, detalleVenta);
  }

  @del('/detalle-ventas/{id}', {
    responses: {
      '204': {
        description: 'DetalleVenta DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detalleVentaRepository.deleteById(id);
  }
}
