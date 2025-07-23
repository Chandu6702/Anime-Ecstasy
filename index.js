
  const toggle = document.getElementById('theme-toggle');

  // Load saved preference
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });

