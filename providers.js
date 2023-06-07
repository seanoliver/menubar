/**
 * Handlers for interacting with Google Bard.
 */
class Bard {
	/** Gets prompt field input handler */
	getInputHandler(sanitizedInput) {
		return `
      function() {
        var inputElement = document.querySelector("#mat-input-0");
        var event = new Event('input', { bubbles: true });
        event.simulated = true;
        var tracker = inputElement._valueTracker;
        if (tracker) {
          tracker.setValue("${sanitizedInput}");
        }
        setTimeout(function() {
          inputElement.dispatchEvent(event);
        }, 100);
        inputElement.value = "${sanitizedInput}";
      }`;
	}

	/** Gets prompt form submit button handler */
	getSubmitHandler(sanitizedInput) {
		return `
      function() {
        var inputElement = document.querySelector("#mat-input-0");
        var event = new Event('input', { bubbles: true });
        event.simulated = true;
        var tracker = inputElement._valueTracker;
        if (tracker) {
          tracker.setValue("${sanitizedInput}");
        }
        inputElement.dispatchEvent(event);
        inputElement.value = "${sanitizedInput}";
        var btn = document.querySelector("button[aria-label*='Send message']");
        btn.setAttribute("aria-disabled", "false");
        btn.click();
      }`;
	}

	/** Adjustments to provider CSS on DOM ready */
	getDomReadyCss() {
		return `
      .chat-history, .conversation-container, .input-area, .mdc-text-area {
        margin: 0 !important;
      }
      response-container {
        display: none;
      }
      model-response response-container {
        display: block !important;
      }
      .gmat-caption {
        opacity: 0;
        height: 0;
      }
      header {
        display: none !important;
      }
      header + div {
        display: none !important;
      }
      .capabilities-disclaimer {
        display: none !important;
      }
      .input-area-container .input-area {
        padding: 0;
      }
      .logo-gutter {
        display: none !important;
      }
    `;
	}
}

/**
 * Handlers for interacting with Open AI ChatGPT.
 */
class Oai {
	/** Gets prompt field input handler */
	getInputHandler(sanitizedInput) {
		return `
      function() {
        function simulateUserInput(element, text) {
          const inputEvent = new Event('input', { bubbles: true });
          element.focus();
          element.value = text;
          element.dispatchEvent(inputEvent);
        }
        var inputElement = document.querySelector('textarea[placeholder*="Send a message"]');
        simulateUserInput(inputElement, "${sanitizedInput}");
      }`;
	}

	/** Gets prompt form submit button handler */
	getSubmitHandler(sanitizedInput) {
		return `
      function() {
        var btn = document.querySelector("textarea[placeholder*='Send a message']+button");
        btn.disabled = false;
        btn.click();
      }`;
	}

	/** Adjustments to provider CSS on DOM ready */
	getDomReadyCss() {
		return `
      .text-xs.text-center {
        opacity: 0;
        height: 0;
        margin-bottom: -10px;
      }
      .sticky,
      .pointer-events-auto.flex.border-orange-500,
      [class*="shared__Capabilities"] {
        display: none !important;
      }
      [class*="shared__Wrapper"] {
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 15vh;
      }
      [class*="shared__Wrapper"] h3 {
        margin-top: -40px;
        font-size: 20px;
      }
      .flex-shrink-0.flex.flex-col.relative.items-end {
        display: none !important;
      }
    `;
	}
}

/**
 * Handlers for interacting with Antropic Claude.
 */
class Claude {
	/** Gets prompt field input handler */
	getInputHandler(sanitizedInput) {
		return `
      function() {
        var inputElement = document.querySelector('div.ProseMirror');
        inputElement.textContent = "${sanitizedInput}";
      }`;
	}

	/** Gets prompt form submit button handler */
	getSubmitHandler(sanitizedInput) {
		return `
      function() {
        var btn = document.querySelector('div.group.flex.p-3 button:has(svg)');
        btn.disabled = false;
        btn.click();
      }`;
	}

	/** Adjustments to provider CSS on DOM ready */
	getDomReadyCss() {
		return `
      header, .container {
        background-color: white;
        filter: invert(100%) hue-rotate(180deg);
      }
      .p-1.w-9.h-9.shrink-0 {
        display: none;
      }
      .mx-4.md\:mx-12.mb-2.md\:mb-4.mt-2.w-auto {
        margin: 0 !important;
      }
    `;
	}
}

module.exports = {
  Bard,
  Oai,
  Claude
};