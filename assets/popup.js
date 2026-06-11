(function () {

    const REDIRECT = "https://kouponsfy.online";

    document.addEventListener("DOMContentLoaded", function () {

        const popup = document.createElement("div");
        popup.className = "cookie-backdrop";

        popup.innerHTML = '<div class="cookie-modal"><h3>🍪 Cookie Preferences</h3><p>We use cookies and similar technologies to improve website functionality, analyze traffic and enhance user experience.</p><div class="cookie-actions"><button id="acceptBtn" class="cookie-btn cookie-accept">Accept</button><button id="rejectBtn" class="cookie-btn cookie-reject">Reject</button></div></div>';

        document.body.appendChild(popup);

        const isLander = window.location.pathname.indexOf("lander.html") > -1;

        document.getElementById("acceptBtn").onclick = function () {
            if (isLander) {
                window.location.href = REDIRECT;
            } else {
                popup.remove();
            }
        };

        document.getElementById("rejectBtn").onclick = function () {
            if (isLander) {
                window.location.href = REDIRECT;
            } else {
                popup.remove();
            }
        };

    });

})();
```
