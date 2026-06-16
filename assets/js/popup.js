(function () {

    const REDIRECT_URL = "https://your-affiliate-link.com";

    function createPopup(redirectMode = false) {

        if (document.querySelector(".popup-overlay")) return;

        const overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        overlay.innerHTML = `
            <div class="popup-box">

                <h2>Policy Notice</h2>

                <p>
                    Please review and accept our website policy before continuing.
                    This notice is informational only.
                </p>

                <div class="popup-buttons">

                    <button id="popupAccept" class="popup-btn popup-accept">
                        Accept
                    </button>

                    <button id="popupClose" class="popup-btn popup-close">
                        Close
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(overlay);

        const acceptBtn = document.getElementById("popupAccept");
        const closeBtn = document.getElementById("popupClose");

        if (redirectMode) {

            acceptBtn.addEventListener("click", function () {
                window.location.href = REDIRECT_URL;
            });

            closeBtn.addEventListener("click", function () {
                window.location.href = REDIRECT_URL;
            });

        } else {

            function closePopup() {
                overlay.remove();
            }

            acceptBtn.addEventListener("click", closePopup);
            closeBtn.addEventListener("click", closePopup);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {

        const page = window.location.pathname;

        if (page.includes("lander.html")) {
            createPopup(true);
        } else {
            createPopup(false);
        }

    });

})();
```
