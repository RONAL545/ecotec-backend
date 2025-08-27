// src/detalles-personal/entities/detalle-personal.entity.ts
import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('detalles_personal')
export class DetallePersonal {
  @PrimaryColumn({ name: 'id_personal' })
  idPersonal: number;

  @Column({ name: 'reportes_atendidos', default: 0 })
  reportesAtendidos: number;

  // Relación One-to-One con Usuario
  @OneToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_personal' })
  usuario: Usuario;
}