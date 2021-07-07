export const baseUrl: string = process.env.VUE_APP_BASE_URL

/*
  单曲、歌手、歌单、用户、视频、专辑
*/
export const SEARCH_TYPE = {
  songs: {
    type: 1,
    resName: '首歌曲',
    limit: 100
  },
  artists: {
    type: 100,
    resName: '位歌手',
    limit: 30
  },
  playlists: {
    type: 1000,
    resName: '个歌单',
    limit: 20

  },
  users: {
    type: 1002,
    resName: '位用户',
    limit: 30
  },
  videos: {
    type: 1014,
    resName: '个视频',
    limit: 24
  },

  albums: {
    type: 10,
    resName: '张专辑',
    limit: 30
  }
}
// 播放模式
export enum MODE {
  singleCycle,
  orderPlay,
  listLoop,
  randomPlay
}

// 评论每页数量
export const COMMENT_LIMIT = 60

// mvlist 每页数量
export const MVLIST_LIMIT = 105

// playlist 每页数量
export const PLAYLIST_LIMIT = 100

// singerlist 每页数量
export const SINGER_LIMIT = 60
