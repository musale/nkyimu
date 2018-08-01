import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The group ANheaderInline lists the elements that are inline, are
 * specific to the Akoma Ntoso vocabulary, and should only be used
 * within the header element
 */
export class ANheaderInline implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        courtType: { maxOccur: 1, options: {} },
        neutralCitation: { maxOccur: 1, options: {} },
        party: { maxOccur: 1, options: {} },
        judge: { maxOccur: 1, options: {} },
        lawyer: { maxOccur: 1, options: {} },
        signature: { maxOccur: 1, options: {} },
        argument: { maxOccur: 1, options: {} },
      },
    },
  };
}