/**
 * Dropdown
 */

// Import dropdown js from bootstrap
import 'bootstrap/js/src/dropdown';

// Custom
import 'protons';

// Module template
import './_dropdown.twig';

// Import custom sass, includes Bootstrap sass
import './_dropdown.scss';

export const name = 'dropdown';

export function disable() {}

export function enable() {}

export default enable;
