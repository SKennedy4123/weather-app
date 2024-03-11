import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            class="search-input"
            id="search-input"
          />
          <input type="submit" value="Search" class="search-button" />
        </form>
      </header>
    </div>
  );
}
