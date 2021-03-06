import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element abbr is an HTML element and is used in Akoma Ntoso
 * as in HTML, for the specification of an abbreviation or an
 * acronym (an inline). As in HTML, use attribute title to specify
 * the full expansion of the abbreviation or acronym.
 */
export class Abbr extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'abbr'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
