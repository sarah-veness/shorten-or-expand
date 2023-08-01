import { describe, expect, test } from '@jest/globals';
import { sanitizeUrl, stripUrl } from '../src/sanitize-url'

describe('Sanitize', () => {
  test('returns the URL if it begins with http://', async () => {
    let url = await sanitizeUrl('http://test.com')
    expect(url).toBe('http://test.com')
  })
  test('returns the URL if it begins with https://', async () => {
    let url = await sanitizeUrl('https://test.com')
    expect(url).toBe('https://test.com')
  })
  test('adds https:// if the provided url emits it', async () => {
    let url = await sanitizeUrl('test.com')
    expect(url).toBe('https://test.com')
  })
})

describe('Strip', () => {
  test('returns the stripped URL if it begins with http://', async () => {
    let url = await stripUrl('http://bit.ly.com/sdasjd')
    expect(url).toBe('bit.ly.com/sdasjd')
  })
  test('returns the stripped URL if it begins with https://', async () => {
    let url = await stripUrl('https://bit.ly.com/sdasjd')
    expect(url).toBe('bit.ly.com/sdasjd')
  })
  test('returns the stripped URL if it begins with www.', async () => {
    let url = await stripUrl('www.bit.ly.com/sdasjd')
    expect(url).toBe('bit.ly.com/sdasjd')
  })
  test('returns url if it does not include protocol', async () => {
    let url = await stripUrl('bit.ly.com/sdasjd')
    expect(url).toBe('bit.ly.com/sdasjd')
  })
})