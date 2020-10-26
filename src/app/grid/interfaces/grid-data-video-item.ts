export interface GridDataVideoItemI {
  etag: string;
  id: GridDataVideoItemIdI;
  kind: string;
  snippet: GridDataVideoItemSnippetI;
}

interface GridDataVideoItemIdI {
  kind: string;
  videoId: string;
}

interface GridDataVideoItemSnippetI {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: GridDataVideoItemThumbnailsI;
  title: string;
}

interface GridDataVideoItemThumbnailsI {
  default: GridDataVideoItemThumbnailsDataI;
  high: GridDataVideoItemThumbnailsDataI;
  medium: GridDataVideoItemThumbnailsDataI;
}

export interface GridDataVideoItemThumbnailsDataI {
  height: number;
  url: string;
  width: string;
}
