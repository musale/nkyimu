import { AbstractNode } from "../../Abstracts/AbstractNode";
import { Optvalue } from "../../AttributeGroups/Optvalue";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes/Inline";

const type = new Inline();

/**
 * the element docCommittee is an inline element within
 * preface to identify the string used by the document
 * detailing the committee within which the document
 * originated
 */
export class DocCommittee extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'docCommittee'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Optvalue()).items,
  ];
}
