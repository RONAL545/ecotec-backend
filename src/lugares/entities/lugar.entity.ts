import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Sede } from '../../sedes/entities/sede.entity';
import { Reporte } from '../../reportes/entities/reporte.entity';

@Entity('lugares')
export class Lugar {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sede, (sede) => sede.lugares, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sede_id' })
  sede: Sede;

  @Column()
  nombre: string;

  @OneToMany(() => Reporte, (reporte) => reporte.lugar)
  reportes: Reporte[];
}
