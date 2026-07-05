document.addEventListener('DOMContentLoaded', function() {
  initNav();
  initSmoothScroll();
  initScrollReveal();
  initContactForm();
});

function initNav() {
  var header = document.querySelector('.header');
  var toggle = document.querySelector('.header__toggle');
  var links = document.querySelectorAll('.header__nav a');

  if (!toggle || !header) return;

  toggle.addEventListener('click', function() {
    var open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  links.forEach(function(link) {
    link.addEventListener('click', function() {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = document.querySelector('.header').offsetHeight + 20;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
}

function initScrollReveal() {
  var items = document.querySelectorAll(
    '.case-study, .skills__card, .about__content, .contact__form, .hero__preview, .hero__content'
  );

  items.forEach(function(el) {
    el.classList.add('reveal');
  });

  if (!window.IntersectionObserver) {
    items.forEach(function(el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  items.forEach(function(el) {
    observer.observe(el);
  });
}

function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateForm()) return;
    var name = document.getElementById('name').value.trim();
    showToast('Thank you, ' + name + '. I\'ll be in touch soon.', 'success');
    form.reset();
  });
}

function validateForm() {
  var valid = true;
  var fields = [
    { id: 'name', check: function(v) { return v.length >= 2; }, msg: 'Enter your full name.' },
    { id: 'email', check: function(v) { return v.includes('@') && v.includes('.'); }, msg: 'Enter a valid email address.' },
    { id: 'message', check: function(v) { return v.length >= 10; }, msg: 'Add a few more details about your project.' }
  ];

  fields.forEach(function(field) {
    var input = document.getElementById(field.id);
    var group = input.closest('.form-group');
    var error = group.querySelector('.form-error');
    var value = input.value.trim();

    if (!field.check(value)) {
      group.classList.add('has-error');
      error.textContent = field.msg;
      valid = false;
    } else {
      group.classList.remove('has-error');
      error.textContent = '';
    }
  });

  return valid;
}

function showToast(message, type) {
  var existing = document.querySelector('.toast');
  if (existing) existing.remove();

  var toast = document.createElement('div');
  toast.className = 'toast toast--' + (type || 'info');
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(function() {
    toast.classList.add('toast--show');
  });

  setTimeout(function() {
    toast.classList.remove('toast--show');
    setTimeout(function() { toast.remove(); }, 300);
  }, 3200);
}
