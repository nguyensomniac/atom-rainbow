'use babel';

const body = document.body;

export default {
  // configuration
  config: {
    cycleDuration: {
      type: 'number',
      default: 5000,
      description: 'How long, in milliseconds, it takes to cycle through the color spectrum one time.'
    },
    // When enabled, adds a sepia tone filter to the screen. This adds color to the greys
    // on screen so they change color. Disabled by default for better performance.
    tintMode: {
      type: 'boolean',
      default: false
    }
  },

  changeDuration(duration) {
    body.style.animationDuration = `${duration}ms`;
  },

  toggleTintMode(isEnabled) {
    if (isEnabled) {
      body.classList.add('rainbow-tint-mode');
    } else {
      body.classList.remove('rainbow-tint-mode');
    }
  },


  activate(state) {
    body.classList.add('rainbow');

    this.changeDuration(atom.config.get('rainbow.cycleDuration'));
    atom.config.observe('rainbow.cycleDuration', this.changeDuration);

    this.toggleTintMode(atom.config.get('rainbow.tintMode'));
    atom.config.observe('rainbow.tintMode', this.toggleTintMode);
  }
};
