import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cnujas5jm4es739vkff0-a.singapore-postgres.render.com',
      port: 5432,
      username: 'task_management_az8p_user',
      password: 'B33JEZulb1npCFQc5Uc2x4gVcGj7BLkX',
      database: 'task_management_az8p',
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,
      entities: [Task, User],
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
