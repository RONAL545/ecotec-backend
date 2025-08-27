import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Sede } from '../../sedes/entities/sede.entity';
import { Lugar } from '../../lugares/entities/lugar.entity';
import { Evidencia } from '../../evidencias/entities/evidencia.entity';
import { HistorialReporte } from '../../historial/entities/historial.entity';

@Entity('reportes')
export class Reporte {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.reportes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_estudiante' })
  estudiante: Usuario;

  @ManyToOne(() => Sede, (sede) => sede.reportes, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'sede_id' })
  sede: Sede;

  @Column()
  piso: string;

  @ManyToOne(() => Lugar, (lugar) => lugar.reportes, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'lugar_id' })
  lugar: Lugar;

  @Column('text')
  descripcion: string;

  @Column()
  tipo_problema: string;

  @Column({ default: 'pendiente' })
  estado: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.reportesAsignados, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'id_personal_asignado' })
  personalAsignado: Usuario;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_actualizacion: Date;

  @OneToMany(() => Evidencia, (evidencia) => evidencia.reporte)
  evidencias: Evidencia[];

  @OneToMany(() => HistorialReporte, (historial) => historial.reporte)
  historial: HistorialReporte[];
}
