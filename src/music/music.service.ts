import { Injectable } from '@nestjs/common';
import { MusicDto } from 'src/dto/music/music.dto';

@Injectable()
export class MusicService {
    private musics: MusicDto[] = [
        {
            id: 1,
            title: 'Stupid Love',
            singer: 'Lady Gaga',
            platform: ['Deezer', 'Spotify', 'Apple music', 'Youtube'],
        },
        {
            id: 2,
            title: 'Dance Monkey',
            singer: 'Tones and I',
            platform: ['Deezer', 'Apple music', 'Youtube'],
        },
        {
            id: 3,
            title: 'Sweet but Psycho',
            singer: 'Ava max',
            platform: ['Spotify', 'Apple music'],
        },
    ];

    findAll(): MusicDto[] {
        return this.musics;
    }
    findById(id : string): MusicDto{
        const result : MusicDto = this.musics.find((music) => music.id === +id);
        return result;
    }

    create(music : MusicDto){
        const result : MusicDto[] = this.findAll();
        this.musics.push({id: result.length + 1, ...music});
    }

    update(id: string, music : MusicDto){
        const result : MusicDto = this.findById(id);
        if(result) {
            this.musics[result.id -1] = music
        }
    }

    delete(id: string){
        const result: number = this.musics.findIndex((music) => music.id === +id);
        if(result >= 0){
            this.musics.splice(result, 1)
        }
    }
}
