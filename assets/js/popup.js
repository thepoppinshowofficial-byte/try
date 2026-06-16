(function () {

    const REDIRECT_URL = "https://usatap.netlify.app/";

    function createPopup(redirectMode) {

        if (document.querySelector(".popup-overlay")) {
            return;
        }

        const overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        overlay.innerHTML = `
            <div class="popup-box">

                <h2>Policy Notice</h2>

                <p>
                    Please review and accept our website policy before continuing.
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

        if (page.indexOf("lander.html") > -1) {
            createPopup(true);
        } else {
            createPopup(false);
        }

    });

})();
