// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { ReportesModule } from './reportes/reportes.module';
import { EstadisticasModule } from './estadisticas/estadisticas.module';
import { ReciclajeModule } from './reciclaje/reciclaje.module';
import { SedesModule } from './sedes/sedes.module';
import { LugaresModule } from './lugares/lugares.module';
import { DetallesEstudiantesModule } from './detalles-estudiantes/detalles-estudiantes.module';
import { DetallesPersonalModule } from './detalles-personal/detalles-personal.module';
import { EvidenciasModule } from './evidencias/evidencias.module';
import { HistorialModule } from './historial/historial.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    UsuariosModule,
    AuthModule,
    ReportesModule,
    EstadisticasModule,
    ReciclajeModule,
    SedesModule,
    LugaresModule,
    DetallesEstudiantesModule,
    DetallesPersonalModule,
    EvidenciasModule,
    HistorialModule,
  ],
})
export class AppModule {}