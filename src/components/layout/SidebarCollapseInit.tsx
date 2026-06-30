import Script from 'next/script';

const sidebarCollapseInitScript = `(function(){var codaBody=document.querySelector('.coda-body');if(!codaBody)return;try{if(localStorage.getItem('sidebar-collapsed')==='true'&&window.matchMedia('(min-width: 841px)').matches){codaBody.classList.add('sidebar-collapsed')}}catch(e){}})();`;

export default function SidebarCollapseInit() {
  return (
    <Script id="sidebar-collapse-init" strategy="beforeInteractive">
      {sidebarCollapseInitScript}
    </Script>
  );
}
