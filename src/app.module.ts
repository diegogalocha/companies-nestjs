import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';

@Module({
    imports: [],
    controllers: [CompaniesController]
})

export class ApplicationModule {}