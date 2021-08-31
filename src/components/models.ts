export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface MenuLink {
  id: number,
  "menu_title": string,
  "menu_subtitle": string,
  content: {
    header: string,
    "short_text": string,
    "full_text": string,
    "image_url": string,
    "full_text_btn_title": string
  }
}

export interface Screen {
  current: number;
  laptop: number;
  desktop: number;
}
