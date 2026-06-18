(function () {
  try {
    sessionStorage.setItem('redirect', location.href);
  } catch (_) {
    // Ignore storage failures and still return visitors to the app shell.
  }

  location.replace('./');
})();
