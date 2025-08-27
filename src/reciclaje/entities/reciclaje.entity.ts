import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('reciclaje')
export class Reciclaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo_material: string;

  @Column('decimal', { precision: 10, scale: 2 })
  kilos_reciclados: number;

  @Column('decimal', { precision: 10, scale: 2 })
  kilos_desperdiciados: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_venta: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.reciclajes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_admin' })
  admin: Usuario;
}
