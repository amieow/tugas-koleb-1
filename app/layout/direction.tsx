import { LayoutProps } from "../asset/type/type"

export const Rows = ({
   children,
   className = "",
   reversed = false,
   whiteSpaceX = false,
   ...props
}: LayoutProps) => {
   return (
      <div {...props} className={`flex ${reversed ? "flex-row-reverse" : "flex-row"} ${whiteSpaceX ? "mx-auto max-w-[1440px]" : ""} ${className}`}>
         {children}
      </div>
   )
}

export const Cols = ({
   children,
   className = "",
   reversed = false,
   whiteSpaceX = false,
   ...props
}: LayoutProps) => {
   return (
      <div  {...props} className={`flex ${reversed ? "flex-col-reverse" : "flex-col"} ${whiteSpaceX ? "mx-auto max-w-[1440px]" : ""} ${className}`}>
         {children}
      </div>
   )
}
