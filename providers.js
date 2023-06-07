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
}
