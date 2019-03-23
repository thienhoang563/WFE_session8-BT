import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
 playlist = [
   {id: 'qVeqdeZdZfM', song: 'Một Bước Yêu Vạn Dặm Đau Lyrics - Mr. Siro'},
   {id: 'kTJbE3sfvlI', song: 'Alan Walker, K-391 & Emelie Hollow - Lily (Lyrics)'},
   {id: 'nbJH_iPBz9c', song: 'Một Đêm Say - Thịnh Suy | K-ICM Remix | Deep House'},
   {id: '8x2NjwwHUbQ', song: 'JACK - HỒNG NHAN [OFFICIAL MV] | G5R'}
 ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
