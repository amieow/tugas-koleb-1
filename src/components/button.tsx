export default function Button({
   className = "",
   children,
   ...props
} : {
   className? : string
   children : React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
   return (
      <button {...props} className={`font-light ${className}`}>
         {children}
      </button>
   )
}
