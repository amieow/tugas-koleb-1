import { LayoutProps } from "../asset/type/type"

export const Rows = ({
   children,
   className = "",
   reversed = false,
   whiteSpaceX = false,
   whiteSpaceBottom = false,
   ...props
}: LayoutProps) => {
   return (
      <div {...props} className={`flex ${reversed ? "flex-row-reverse" : "flex-row"} ${whiteSpaceBottom ? "mb-36" : ""} ${whiteSpaceX ? "mx-auto max-w-[1440px] px-4 md:px-12 min-[1500px]:px-0" : ""} ${className}`}>
         {children}
      </div>
   )
}

export const Cols = ({
   children,
   className = "",
   reversed = false,
   whiteSpaceX =false,
   whiteSpaceTop = false,
   whiteSpaceBottom = false,
   ...props
} : LayoutProps & {whiteSpaceTop? : boolean}) => {
   return (
      <div  {...props} className={`flex ${reversed ? "flex-col-reverse" : "flex-col"} ${whiteSpaceBottom ? "mb-36" : ""} ${whiteSpaceTop ? " mt-48" : ""} ${whiteSpaceX ? "mx-auto max-w-[1440px] px-4 md:px-12 min-[1500px]:px-0" : ""} ${className}`}>
         {children}
      </div>
   )
}
