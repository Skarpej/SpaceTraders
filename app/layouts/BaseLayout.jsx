export default function BaseLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
            {children}
    </ThemeProvider>
  )
}