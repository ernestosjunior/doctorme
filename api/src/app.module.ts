import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { ControllersModule } from './infra/controllers/controllers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'], isGlobal: true }),
    DatabaseModule,
    ControllersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
