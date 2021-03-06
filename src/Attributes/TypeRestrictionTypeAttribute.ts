import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { RestrictionType } from "../SimpleTypes/RestrictionType";

export class TypeRestrictionTypeAttribute extends AbstractAttribute {

  static getClassName(): string { return 'TypeRestrictionTypeAttribute'; }

  get className(): string { return 'TypeRestrictionTypeAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'type';

  static getName() { return 'type__restriction'; }

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
    return (new RestrictionType()).validate(value, 'type');
  }
}
