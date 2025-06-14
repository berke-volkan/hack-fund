(function () {
    function insertAutoAds() {
        const clientID = "ca-pub-2030059074984615";
        const slotID = "4612254692";

        // Check if AdSense script is already loaded
        let adsScript = document.querySelector('script[src*="adsbygoogle.js"]');
        if (!adsScript) {
            adsScript = document.createElement("script");
            adsScript.async = true;
            adsScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientID}`;
            adsScript.setAttribute("crossorigin", "anonymous");
            document.head.appendChild(adsScript);
        }

        // Create ad container exactly like Google's example
        const adContainer = document.createElement("ins");
        adContainer.className = "adsbygoogle";
        adContainer.style.display = "block";
        adContainer.setAttribute("data-ad-client", clientID);
        adContainer.setAttribute("data-ad-slot", slotID);
        adContainer.setAttribute("data-ad-format", "auto");
        adContainer.setAttribute("data-full-width-responsive", "true");

        document.body.appendChild(adContainer);

        function pushAds() {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense error:", e);
            }
        }

        if (window.adsbygoogle && typeof window.adsbygoogle.push === "function") {
            pushAds();
        } else {
            adsScript.addEventListener("load", pushAds);
        }
    }

    // Wait for DOM to be ready before inserting
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", insertAutoAds);
    } else {
        insertAutoAds();
    }
})();

