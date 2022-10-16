import { CreateJobDto } from './create-job.dto';
export declare class JobsController {
    findAll(): string;
    findOne(id: string): string;
    create(createJobDto: CreateJobDto): Promise<string>;
    remove(id: string): string;
}
