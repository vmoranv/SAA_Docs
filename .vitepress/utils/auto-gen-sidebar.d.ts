export interface SidebarItem {
  text: string;
  link?: string;
  collapsible?: boolean;
  items?: SidebarItem[];
}

export declare function set_sidebar(pathname: string): SidebarItem[];