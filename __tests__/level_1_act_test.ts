import { Act } from '../src/Elements/Root/Act';
import { AKNDocument } from '../src/Elements/Root/AKNDocument';
import { Meta } from '../src/Elements/RootContainers/Meta';
import { CoverPage } from '../src/Elements/RootContainers/CoverPage';
import { Preface } from '../src/Elements/RootContainers/Preface';
import { Preamble } from '../src/Elements/RootContainers/Preamble';
import { Body } from '../src/Elements/RootContainers/Body';
import { Conclusions } from '../src/Elements/RootContainers/Conclusions';
import { Attachments } from '../src/Elements/RootContainers/Attachments';
import { Components } from '../src/Elements/RootContainers/Components';
import { References } from '../src/Elements/Core/References';
import { Identification } from '../src/Elements/Core/Identification';
import { TLCConcept } from '../src/Elements/Core/TLCConcept';
import { SourceAttribute, HrefAttribute } from '../src/Attributes';

const doc = new AKNDocument();
let act = new Act();
const meta = new Meta();
const coverPage = new CoverPage();
const preface = new Preface();
const preamble = new Preamble();
const body = new Body();
const conclusions = new Conclusions();
const attachments = new Attachments();
const components = new Components();

/**
 * Act test
 */
describe('Level 1 Act test', () => {
  // it('validates the maximum element count', () => {
  //   expect(() => {
  //     act = new Act();
  //     act.appendChild(meta);
  //     act.appendChild(meta);
  //   }).toThrow('The child node meta should only appear once');
  // });

  it('validates the correct order of required elements', () => {
    expect(() => {
      act = new Act();
      act.appendChild(body);
    }).toThrow('The child node body is unexpected. Expected is meta');
  });

  it('validates the correct order of non-required elements', () => {
    expect(() => {
      act = new Act();
      act.appendChild(meta);
      act.appendChild(conclusions);
    }).toThrow(
      'The child node conclusions is unexpected. Expected is one of coverPage, preface, preamble, body'
    );

    expect(() => {
      act = new Act();
      act.appendChild(meta);
      act.appendChild(body);
      act.appendChild(preamble);
    }).toThrow(
      'The child node preamble is expected before the current last child(body). Expected is one of conclusions, attachments, components'
    );

    expect(() => {
      act = new Act();
      act.appendChild(meta);
      act.appendChild(body);
      act.appendChild(conclusions);
      act.appendChild(preamble);
    }).toThrow(
      'The child node preamble is expected before the current last child(conclusions). Expected is one of attachments, components'
    );
  });

  it('validates the Act is generated successfully', () => {
    act = new Act();
    act.appendChild(meta);
    act.appendChild(body);
    act.appendChild(conclusions);

    expect(act.getNode().childNodes.length).toBe(3);
  });
});

describe('Create act with references', () => {
  it('creates a references node', () => {
    const actTest = new Act();
    const metaTest = new Meta();
    const identificationTest = new Identification();
    const tlcconcept = new TLCConcept();
    const referencesTest = new References();

    identificationTest.setAttribute(new SourceAttribute('#tester'));
    referencesTest.setAttribute(new SourceAttribute('#tester'));

    tlcconcept.setAttribute(new HrefAttribute('#testConcept'));
    expect(()=>{tlcconcept.validate()}).toThrow(
      'Element TLCConcept is missing required attributes: ShowAsAttribute'
    );

    actTest.appendChild(metaTest);
    metaTest.appendChild(identificationTest);
    metaTest.appendChild(referencesTest);

    expect(actTest.getNode().childNodes.length).toBe(1);
    expect(actTest.getNode().childNodes[0].childNodes.length).toBe(2);

  });
});
