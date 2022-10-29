<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item has-text-weight-bold is-size-3" href="/">
        FNB Wroclaw
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link to="/shop" class="navbar-item">Shop</nuxt-link>
        <nuxt-link to="/events" class="navbar-item">Events</nuxt-link>
        <nuxt-link to="/news" class="navbar-item">News</nuxt-link>
        <nuxt-link to="/faq" class="navbar-item">FAQ</nuxt-link>
        <nuxt-link to="/volunteer" class="navbar-item">Volunteer</nuxt-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Locations</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">Warsaw</a>
            <a class="navbar-item">Wroclaw</a>
            <a class="navbar-item">Poznan</a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> + Add new location </a>
          </div>
        </div>

        <div class="navbar-item">
          <div class="buttons">
            <a
              class="button is-success"
              href="http://foodnotbombs.net/new_site/donate.php"
              target="__blank"
            >
              <strong>Donate</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style></style>
