const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/*.{ts,tsx}", "./components/*.{ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "side-panel": "260px",
      },
      minWidth: {
        "min-side-panel": "60px",
      },
      width: {
        "side-panel": "260px",
      },
      colors: {
        "light-blue": "#01b4e4",
        "dark-blue": "#03213A",
      },
      boxShadow: {
        block: "1px 1px 3px 0 rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        // xxs: "16px",
      },
    },
  },
  plugins: [
    plugin(function (helpers) {
      // variants that help styling Radix-UI components
      dataStateVariant("open", helpers);
      dataStateVariant("closed", helpers);
      dataStateVariant("on", helpers);
      dataStateVariant("checked", helpers);
      dataStateVariant("unchecked", helpers);
    }),
  ],
};

function dataStateVariant(
  state,
  {
    addVariant, // for registering custom variants
    e, // for manually escaping strings meant to be used in class names
  }
) {
  addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `data-state-${state}${separator}${className}`
      )}[data-state='${state}']`;
    });
  });

  addVariant(`group-data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.group[data-state='${state}'] .${e(
        `group-data-state-${state}${separator}${className}`
      )}`;
    });
  });

  addVariant(`peer-data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.peer[data-state='${state}'] ~ .${e(
        `peer-data-state-${state}${separator}${className}`
      )}`;
    });
  });
}
