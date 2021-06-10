import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MusicDto } from 'src/dto/music/music.dto';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
    
constructor(private readonly service: MusicService){}

    @Get()
    findAll(): MusicDto[] {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) : MusicDto{
        return this.service.findById(id)
    }

    @Post()
    create(@Body() music: MusicDto){
        this.service.create(music)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() music: MusicDto){
        return this.service.update(id, music)
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.service.delete(id)
    }
}
