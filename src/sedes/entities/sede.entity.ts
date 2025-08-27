import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Lugar } from '../../lugares/entities/lugar.entity';
import { Reporte } from '../../reportes/entities/reporte.entity';

@Entity('sedes')
export class Sede {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;

  @Column({ nullable: true })
  direccion: string;

  @Column()
  pisos: number;

  @Column({ default: 'activo' })
  estado: string;

  @OneToMany(() => Usuario, (usuario) => usuario.sede)
  usuarios: Usuario[];

  @OneToMany(() => Lugar, (lugar) => lugar.sede)
  lugares: Lugar[];

  @OneToMany(() => Reporte, (reporte) => reporte.sede)
  reportes: Reporte[];
}
