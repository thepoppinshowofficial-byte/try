(function () {

    const DESTINATION_URL = "";

    const style = document.createElement("style");

    style.innerHTML = `
        .popup-overlay{
            position:fixed;
            top:0;
            left:0;
            width:100vw;
            height:100vh;

            background:rgba(0,0,0,.92);

            backdrop-filter:blur(25px);
            -webkit-backdrop-filter:blur(25px);

            display:flex;
            align-items:center;
            justify-content:center;

            z-index:999999;
        }

        .popup-box{
            background:#ffffff;
            border-radius:20px;
            padding:30px;
            max-width:420px;
            width:90%;
            text-align:center;
            box-shadow:0 20px 60px rgba(0,0,0,.45);
        }

        .popup-box h2{
            color:#111827;
            font-size:30px;
            margin-bottom:15px;
            font-family:Arial,sans-serif;
        }

        .popup-box p{
            color:#4b5563;
            font-size:15px;
            line-height:1.6;
            margin-bottom:25px;
            font-family:Arial,sans-serif;
        }

        .popup-buttons{
            display:flex;
            flex-direction:column;
            gap:12px;
        }

        .popup-btn{
            width:100%;
            border:none;
            padding:14px;
            border-radius:12px;
            font-size:16px;
            font-weight:700;
            cursor:pointer;
        }

        .popup-accept{
            background:#2563eb;
            color:#fff;
        }

        .popup-close{
            background:#e5e7eb;
            color:#111827;
        }

        .popup-accept:hover,
        .popup-close:hover{
            opacity:.9;
        }

        body.popup-blur > *:not(.popup-overlay){
            filter:blur(20px);
            pointer-events:none;
            user-select:none;
        }
    `;

    document.head.appendChild(style);

    function createPopup() {

        if (document.querySelector(".popup-overlay")) return;

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

        document.body.classList.add("popup-blur");
        document.body.appendChild(overlay);

        function handleAction() {

            if (DESTINATION_URL.trim() !== "") {
                window.location.href = DESTINATION_URL;
                return;
            }

            document.body.classList.remove("popup-blur");
            overlay.remove();
        }

        document
            .getElementById("popupAccept")
            .addEventListener("click", handleAction);

        document
            .getElementById("popupClose")
            .addEventListener("click", handleAction);
    }

    document.addEventListener("DOMContentLoaded", function () {

        const page = window.location.pathname;

        if (page.indexOf("lander.html") > -1) {
            createPopup();
        }

    });

})();
