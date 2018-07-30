import { HierElements } from "../Groups/HierElements";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

const type = new HierElements();

/**
 * The type bodyType specifies a content model of the main hierarchy
 * of a hierarchical document (e.g, an act or a bill)
 */
export class BodyType implements HasChildrenMap {
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      options: {
        choice: {
          options: {
            ...type.CHILDREN_MAP.choice.options
          },
        },
        componentRef: { maxOccur: 1, options: {} },
      }
    }
  };

  readonly SEQUENCE: string[] = [];
  
  static getRegExp():RegExp {
    return new RegExp(`(<componentRef>|${HierElements.getRegExp().source})+`);
  }
}