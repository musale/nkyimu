import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class StartTimeAttribute extends AbstractAttribute {

  static getClassName(): string { return 'StartTimeAttribute'; }

  get className(): string { return 'StartTimeAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'startTime';

  static getName() { return 'startTime'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue: string = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return true;
  }
}