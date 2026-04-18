document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon'),
    mobileMenu = document.querySelector('.mobile-menu'),

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
  }


  menuIcon.addEventListener('click', toggleMobileMenu);
});
