import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { ResultType } from "../SimpleTypes/ResultType";

export class TypeResultTypeAttribute extends AbstractAttribute {

  static getClassName(): string { return 'TypeResultTypeAttribute'; }

  get className(): string { return 'TypeResultTypeAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'type';

  static getName() { return 'type__result'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return (new ResultType()).validate(value, 'type');
  }
}
