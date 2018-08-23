import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class BreakWithAttribute extends AbstractAttribute {

  /**
   * The name of the attribute.
   */
  readonly name: string = 'breakWith';

  static getName() { return 'breakWith'; }

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