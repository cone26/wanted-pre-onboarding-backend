import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  async create(@Body() createJobDto: CreateJobDto): Promise<string> {
    return `This action adds a new job`;
  }
  @Delete('id')
  remove(@Param('id') id: string): string {
    return `This action removes a job #${id}`;
  }
}
