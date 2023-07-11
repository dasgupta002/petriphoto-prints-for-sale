import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang = 'en'>
      <head>
        <meta charSet = 'utf-8' />
        <meta name = 'viewport' content = 'width = device-width, initial-scale = 1' />
        <title>PetriPhoto - Buy Prints</title>
        <link rel = 'icon' href = './favicon.png' />
      </head>  
      <body>
        { children }
      </body>
    </html>
  )
}