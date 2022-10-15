import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateJobDto } from './create-job.dto';

@Controller('jobs')
export class JobsController {
  @Get()
  findAll(): string {
    return 'This action returns all jobs !!';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns #${id}`;
  }
  @Post()
  async create(@Body() createJobDto: CreateJobDto) {
    return `This action adds a new job`;
  }
}
