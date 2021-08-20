import { error, defaults, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.width = '400px';

export const notificationStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 25,
  spacing1: 36,
  spacing2: 36,
  push: 'bottom',
  maxOpen: 1,
  maxStrategy: 'close',
});

export function notificationTooManyCountries() {
  return error({
    title: 'Too many matches found. Please enter a more specific query!',
    icon: 'brighttheme-icon-error',
    hide: true,
    closer: true,
    sticker: false,
    destroy: true,
    stack: notificationStack,
  });
}
