export interface Childrens {
   children : React.ReactNode
}
export type FontType = Childrens & React.HTMLProps<HTMLParagraphElement> & {
   className? : string
   font? : string
}
export type classname = {
   className? : string
}
export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
   children: React.ReactNode;
   className?: string;
   reversed?: boolean;
   whiteSpaceX?: boolean;
   whiteSpaceBottom? : boolean;
}