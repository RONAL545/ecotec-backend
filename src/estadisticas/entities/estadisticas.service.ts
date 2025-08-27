// src/estadisticas/estadisticas.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Reporte } from '../reportes/entities/reporte.entity';
import { Reciclaje } from '../reciclaje/entities/reciclaje.entity';
import { Sede } from '../sedes/entities/sede.entity';

@Injectable()
export class EstadisticasService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    @InjectRepository(Reporte)
    private reporteRepository: Repository<Reporte>,
    @InjectRepository(Reciclaje)
    private reciclajeRepository: Repository<Reciclaje>,
    @InjectRepository(Sede)
    private sedeRepository: Repository<Sede>,
  ) {}

  // Estadísticas de usuarios
  async getUsuariosStats() {
    const totalUsuarios = await this.usuarioRepository.count();
    const estudiantesCount = await this.usuarioRepository.count({
      where: { rol: 'estudiante' },
    });
    const personalCount = await this.usuarioRepository.count({
      where: { rol: 'personal' },
    });
    const adminCount = await this.usuarioRepository.count({
      where: { rol: 'administrador' },
    });

    return {
      total: totalUsuarios,
      estudiantes: estudiantesCount,
      personal: personalCount,
      administradores: adminCount,
    };
  }

  // Estadísticas de reportes
  async getReportesStats() {
    const totalReportes = await this.reporteRepository.count();
    const pendientes = await this.reporteRepository.count({
      where: { estado: 'pendiente' },
    });
    const enProceso = await this.reporteRepository.count({
      where: { estado: 'en_proceso' },
    });
    const terminados = await this.reporteRepository.count({
      where: { estado: 'terminado' },
    });
    const falsos = await this.reporteRepository.count({
      where: { estado: 'falso' },
    });

    return {
      total: totalReportes,
      pendientes,
      en_proceso: enProceso,
      terminados,
      falsos,
    };
  }

  // Estadísticas de reciclaje
  async getReciclajeStats() {
    const result = await this.reciclajeRepository
      .createQueryBuilder('reciclaje')
      .select('SUM(reciclaje.kilos_reciclados)', 'totalReciclados')
      .addSelect('SUM(reciclaje.kilos_desperdiciados)', 'totalDesperdiciados')
      .addSelect('SUM(reciclaje.precio_venta)', 'totalVentas')
      .addSelect('COUNT(*)', 'totalRegistros')
      .getRawOne();

    return {
      totalReciclados: parseFloat(result.totalReciclados) || 0,
      totalDesperdiciados: parseFloat(result.totalDesperdiciados) || 0,
      totalVentas: parseFloat(result.totalVentas) || 0,
      totalRegistros: parseInt(result.totalRegistros) || 0,
    };
  }

  // Estadísticas por sede
  async getSedesStats() {
    return await this.sedeRepository
      .createQueryBuilder('sede')
      .leftJoinAndSelect('sede.usuarios', 'usuarios')
      .leftJoinAndSelect('sede.reportes', 'reportes')
      .select([
        'sede.id',
        'sede.nombre',
        'COUNT(DISTINCT usuarios.id) as usuariosCount',
        'COUNT(DISTINCT reportes.id) as reportesCount',
      ])
      .groupBy('sede.id')
      .addGroupBy('sede.nombre')
      .getRawMany();
  }

  // Dashboard general
  async getDashboardStats() {
    const usuarios = await this.getUsuariosStats();
    const reportes = await this.getReportesStats();
    const reciclaje = await this.getReciclajeStats();

    return {
      usuarios,
      reportes,
      reciclaje,
      timestamp: new Date(),
    };
  }
}