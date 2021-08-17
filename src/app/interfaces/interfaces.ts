export class Blog {
  totalArticles: number = 0;
  articles: Article[] = [];
}

export class Article {
  title:  string = '';
  description:  string = '';
  content:  string = '';
  url:  string = '';
  image: string = '';
  publishedAt: Date = new Date();
  source: Source = new Source();
}

export class Source {
  name: string = '';
  url: string  = '';
}

export enum Status {
  Local,
  Remote,
  RemotePlus
}
