import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Reporte } from '../../reportes/entities/reporte.entity';

@Entity('evidencias_reporte')
export class Evidencia {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Reporte, (reporte) => reporte.evidencias, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_reporte' })
  reporte: Reporte;

  @Column()
  url_foto: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_subida: Date;
}
