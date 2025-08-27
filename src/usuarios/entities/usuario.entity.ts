// src/usuarios/entities/usuario.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Sede } from '../../sedes/entities/sede.entity';
import { Reporte } from '../../reportes/entities/reporte.entity';
import { Reciclaje } from '../../reciclaje/entities/reciclaje.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  codigo: string;

  @Column({ name: 'nombre_completo', length: 100 })
  nombreCompleto: string;

  @Column({ unique: true, length: 100 })
  correo: string;

  @Column()
  contrasena: string;

  @Column({ length: 20 })
  rol: 'estudiante' | 'personal' | 'administrador';

  @ManyToOne(() => Sede, (sede) => sede.usuarios, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'sede_id' })
  sede: Sede;

  @Column({ default: 'activo' })
  estado: string;

  @CreateDateColumn({ name: 'creado_en' })
  creadoEn: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizadoEn: Date;

  // Relaciones OneToMany
  @OneToMany(() => Reporte, (reporte) => reporte.estudiante)
  reportes: Reporte[];

  @OneToMany(() => Reporte, (reporte) => reporte.personalAsignado)
  reportesAsignados: Reporte[];

  @OneToMany(() => Reciclaje, (reciclaje) => reciclaje.admin)
  reciclajes: Reciclaje[];

  // Métodos
  @BeforeInsert()
  async hashPassword() {
    if (this.contrasena) {
      this.contrasena = await bcrypt.hash(this.contrasena, 10);
    }
    
    // Extraer código del correo si es estudiante
    if (this.rol === 'estudiante' && this.correo) {
      this.codigo = this.extractCodigoFromEmail(this.correo);
    }
  }

  // Método para validar contraseña
  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.contrasena);
  }

  // Extraer código del correo (ejemplo: 2021001234@unaj.edu.pe -> 2021001234)
private extractCodigoFromEmail(email: string): string {
  const match = email.match(/^(\d+)@/);
  return match ? match[1] : '';
}
}