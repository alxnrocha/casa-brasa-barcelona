import logo from '../assets/brand/logo-casa-brasa.png'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = 'w-28 sm:w-36' }: BrandLogoProps) {
  return (
    <img
      src={logo}
      alt="Casa Brasa Barcelona"
      width="1655"
      height="723"
      className={`h-auto ${className}`}
    />
  )
}
