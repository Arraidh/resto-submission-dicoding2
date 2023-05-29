class MyFooter extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const styles = `
        :host {
          margin-top: 2rem;
          padding: 2rem;
          position: relative;
          bottom: 0;
          text-align: center;
          font-family: Poppins, sans-serif;
          color: #fff;
          display: block;
          background-color: #14213d;
        }

        @media screen and (max-width: 400px) {
          :host {
            padding: 1rem;
            font-size: 10px;
          }
        }

        footer {
          padding: 16px;
        }
      `;

    const footer = document.createElement("footer");
    footer.textContent = `Copyright © ${new Date().getFullYear()} - Warung Kita`;

    shadowRoot.innerHTML = `<style>${styles}</style>`;
    shadowRoot.appendChild(footer);
  }
}

customElements.define("my-footer", MyFooter);
