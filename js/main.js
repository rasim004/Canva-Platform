// ── SHOW / HIDE PASSWORD ───────────────────────────────
function togglePwd(inputId, btn) {
  const input = document.getElementById(inputId);
  const isPass = input.type === 'password';
  input.type = isPass ? 'text' : 'password';
  
  // Меняем иконку
  btn.innerHTML = isPass
    ? `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
    : `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
}

// ── VALIDATION HELPERS ─────────────────────────────────
function setError(groupId, errId, show) {
  document.getElementById(groupId).classList.toggle('has-error', show);
}

function isEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

// ── LOGIN ──────────────────────────────────────────────
function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;

  let valid = true;

  if (!isEmail(email)) {
    setError('grp-login-email', 'err-login-email', true); valid = false;
  } else {
    setError('grp-login-email', 'err-login-email', false);
  }

  if (pass.length < 1) {
    setError('grp-login-pass', 'err-login-pass', true); valid = false;
  } else {
    setError('grp-login-pass', 'err-login-pass', false);
  }

  if (valid) {
    alert('✅ Login successful!');
  }
}

// Очистка ошибок при вводе
document.querySelectorAll('input').forEach(inp => {
  inp.addEventListener('input', () => {
    const grp = inp.closest('.form-group');
    if (grp) grp.classList.remove('has-error');
  });
});