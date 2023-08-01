import { describe, expect, test } from '@jest/globals';
import sanitizeUrl from '../src/sanitize-url'

describe('Sanitize URL', () => {
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