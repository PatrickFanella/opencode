import { describe, expect, test } from "bun:test"
import { Locale } from "../../src/util/locale"

describe("locale", () => {
  test("formats a fixed-width local clock with seconds", () => {
    const input = new Date(2026, 0, 2, 3, 4, 5).getTime()

    expect(Locale.clock(input)).toBe("03:04:05")
    expect(Locale.datetime(input)).toStartWith("03:04:05 · ")
  })
})
