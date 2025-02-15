(function() {
    function insertAutoAds() {
        var adsScript = document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
        if (!adsScript) {
            adsScript = document.createElement('script');
            adsScript.async = true;
            adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="; // Client token here
            adsScript.setAttribute('crossorigin', 'anonymous');
            document.head.appendChild(adsScript);
        }
        
        var adContainer = document.createElement('ins');
        adContainer.className = 'adsbygoogle';
        adContainer.style.display = 'block';
        adContainer.setAttribute('data-ad-format', 'autorelaxed');
        adContainer.setAttribute('data-ad-client', ''); // Client token here
        adContainer.setAttribute('data-ad-slot', ''); // Slot token here
        
        document.body.appendChild(adContainer);
        
        function pushAds() {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("Error initializing AdSense auto ads:", e);
            }
        }
        
        if (window.adsbygoogle && typeof window.adsbygoogle.push === "function") {
            pushAds();
        } else {
            adsScript.addEventListener('load', pushAds);
            setTimeout(pushAds, 1000);
        }
    }

    window.insertAutoAds = insertAutoAds;
})();
insertAutoAds();