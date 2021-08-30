export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface MenuLink {
  id: string;
  title: string;
  subtitle: string;
  btn: string;
  pic: string;
  link: string;
  content: string;
}

export interface Screen {
  current: number;
  laptop: number;
  desktop: number;
}