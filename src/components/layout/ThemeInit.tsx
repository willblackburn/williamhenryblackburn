import Script from 'next/script';

const themeInitScript = `(function(){try{document.documentElement.setAttribute('data-theme',localStorage.getItem('theme')||'dark')}catch(e){}})();`;

export default function ThemeInit() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {themeInitScript}
    </Script>
  );
}
