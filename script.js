/* ================================================================
   LCN Consulting — Site Scripts
   ================================================================
   Behaviors:
   - Mobile menu toggle (#menuBtn -> #mobileMenu)
   - Scroll-triggered reveal animations (.reveal -> .in-view)
   - Smooth scrolling for in-page anchor links
   - FAQ accordion ([data-faq] / [data-faq-trigger] / [data-faq-content])
   ================================================================ */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // Mobile menu toggle
  // -------------------------------------------------------------
  function initMobileMenu() {
    var btn = document.getElementById('menuBtn');
    var menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
    // Auto-close when a nav link is tapped
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.add('hidden');
      });
    });
  }

  // -------------------------------------------------------------
  // Reveal on scroll
  // -------------------------------------------------------------
  function initReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    // Reduced motion: show everything immediately, no observer
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      // Fallback: just reveal everything
      elements.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(function (el) { observer.observe(el); });
  }

  // -------------------------------------------------------------
  // Smooth scroll for in-page anchors
  // -------------------------------------------------------------
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (!href || href === '#') return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // -------------------------------------------------------------
  // FAQ accordion
  // -------------------------------------------------------------
  function initFAQ() {
    document.querySelectorAll('[data-faq-trigger]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var faq = trigger.closest('[data-faq]');
        if (!faq) return;
        var content = faq.querySelector('[data-faq-content]');
        if (!content) return;
        var isOpen = !content.classList.contains('hidden');
        if (isOpen) {
          content.classList.add('hidden');
          faq.classList.remove('open');
        } else {
          content.classList.remove('hidden');
          faq.classList.add('open');
        }
      });
    });
  }

  // -------------------------------------------------------------
  // Boot
  // -------------------------------------------------------------
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    initMobileMenu();
    initReveal();
    initSmoothScroll();
    initFAQ();
  });
})();
