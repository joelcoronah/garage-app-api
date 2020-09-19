import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';
import { userResponses } from 'src/shared/responses/users.response';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/createCar.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) { }


    /**
     *  Responsible for creating the user
     * @param data object with the required data to create the user 
     */
    @UsePipes(new ValidationPipe())
    @Post()
    async create(@Body() data: CreateCarDto) {
        return this.carsService.create(data, userResponses.creation);
    }

    /**
     * Get all users.
     * @returns Promise with alls users.
     */
    @Get()
    async findAll(@Query('idUser') idUser: number): Promise<any> {
        return await this.carsService.findAll(idUser);
    }

}
