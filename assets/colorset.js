if (
    
    localStorage.getItem('color-mode') === 'light' ||
    (window.matchMedia('(prefers-color-scheme: light)').matches &&
     !localStorage.getItem('color-mode'))
) {
   
    document.documentElement.setAttribute('color-mode', 'light')
}