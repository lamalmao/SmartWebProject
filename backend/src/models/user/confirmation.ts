import crypto from 'crypto';

export default class ConfirmationCode {
  private static Range: number = 9999 - 1000;
  private static TimeShift: number = 60 * 60 * 1000;

  public value: number;
  public active: boolean;
  public until: Date;

  public constructor() {
    this.value = crypto.randomInt(ConfirmationCode.Range);
    this.active = true;
    this.until = new Date(Date.now() + ConfirmationCode.TimeShift);
  }

  public verify(value: number): boolean {
    if (!this.active) return false;
    if (this.until > new Date()) return false;
    return this.value === value;
  }
}