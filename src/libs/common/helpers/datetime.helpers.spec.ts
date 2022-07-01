import { formatDatetime } from './datetime.helpers';

describe('formatDatetime helper', () => {
  it("18925 => '5 h 15 min 25.00 sec'", () => {
    expect(formatDatetime(18925)).toBe('5 h 15 min 25.00 sec');
  });

  it("1518 => '25 min 18.00 sec'", () => {
    expect(formatDatetime(1518)).toBe('25 min 18.00 sec');
  });

  it("37 => '37.00 sec'", () => {
    expect(formatDatetime(37)).toBe('37.00 sec');
  });
});
