// src/detalles-estudiantes/entities/detalle-estudiante.entity.ts
import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('detalles_estudiantes')
export class DetalleEstudiante {
  @PrimaryColumn({ name: 'id_estudiante' })
  idEstudiante: number;

  @Column({ length: 100 })
  carrera: string;

  @Column({ length: 20 })
  ciclo: string;

  @Column({ default: 0 })
  puntos: number;

  @Column({ default: 0 })
  strikes: number;

  // Relación One-to-One con Usuario
  @OneToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_estudiante' })
  usuario: Usuario;
}