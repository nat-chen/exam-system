import { NestFactory } from '@nestjs/core';
import { ExamModule } from './exam.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ExamModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 8888,
    },
  });
  app.startAllMicroservices();
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
