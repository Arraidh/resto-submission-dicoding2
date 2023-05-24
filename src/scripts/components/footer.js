class MyFooter extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    // Styling for the custom footer
    const styles = `
        :host {
          margin-top: 2rem;
          padding: 2rem;
          position: relative;
          bottom: 0;
          text-align: center;
          width: 100%;
          font-family: Poppins, sans-serif;
          color: #fff;
          display: block;
          background-color: #14213d;
        }

        footer {
          padding: 16px;
        }
      `;

    // Create the footer element
    const footer = document.createElement("footer");
    footer.textContent = `Copyright © ${new Date().getFullYear()} - Warung Kita`;

    // Attach the styles and the footer element to the shadow root
    shadowRoot.innerHTML = `<style>${styles}</style>`;
    shadowRoot.appendChild(footer);
  }
}

customElements.define("my-footer", MyFooter);
