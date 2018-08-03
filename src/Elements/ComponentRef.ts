import { AbstractNode } from "../Abstract/AbstractNode";
import { NodeRules } from "../Interfaces/NodeRules";
import { SrcType } from "./ComplexTypes/SrcType";

/**
 * The element componentRef is a reference to a separate manifestation-level
 * resource that holds the content of the component of the document not
 * physically placed at the position specified. Actual resources can either
 * be external (e.g. in the package or even in a different position) or
 * internal (within the components element)
 */
export class ComponentRef extends AbstractNode {
  abbreviation = '';

  nodeName = 'componentRef';

  readonly CHILDREN_MAP: NodeRules = (new SrcType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

}