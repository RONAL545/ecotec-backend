import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Reporte } from '../../reportes/entities/reporte.entity';

@Entity('historial_reportes')
export class HistorialReporte {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Reporte, (reporte) => reporte.historial, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_reporte' })
  reporte: Reporte;

  @Column()
  estado_anterior: string;

  @Column()
  estado_nuevo: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_cambio: Date;

  @Column()
  cambiado_por: string;

  @Column({ nullable: true })
  observaciones: string;
}
