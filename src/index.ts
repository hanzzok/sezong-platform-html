import { Platform } from 'sezong/api';

export const HtmlPlatform: Platform<string> = new Platform(
  'HTML',
  it => it.reduce((a, b) => a + b, ''),
  it => it.data,
  _ => '<br/>'
);
