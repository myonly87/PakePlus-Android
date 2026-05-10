window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// custom.js
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        // 获取键盘弹出后的可视高度
        const height = window.visualViewport.height;
        // 强制设置根元素高度，触发重排
        document.documentElement.style.height = `${height}px`;
        
        // 可选：如果输入框被遮挡，手动滚动到视野中
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
            activeElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    });
}
