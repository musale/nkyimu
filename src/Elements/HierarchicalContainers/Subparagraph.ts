import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Hierarchy } from "../../ComplexTypes/Hierarchy";

const type =  new Hierarchy();

/**
 * this element is a hierarchical container called
 * "subparagraph" either explicitly or due to the local tradition
 */
export class Subparagraph extends AbstractNode {
  abbreviation = 'spg';

  getNodeName(): string { return 'subparagraph'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
