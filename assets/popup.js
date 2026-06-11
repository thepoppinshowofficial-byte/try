document.addEventListener("DOMContentLoaded", function () {

    console.log("popup loaded");

    const popup = document.createElement("div");

    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100vw";
    popup.style.height = "100vh";
    popup.style.background = "rgba(0,0,0,.5)";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.style.zIndex = "999999";

    popup.innerHTML = `
        <div style="
            background:#fff;
            padding:30px;
            border-radius:15px;
            text-align:center;
            max-width:500px;
            width:90%;
        ">
            <h2>Cookie Preferences</h2>
            <p>This is a popup test.</p>
            <button id="testBtn">Accept</button>
        </div>
    `;

    document.body.appendChild(popup);

});
```
