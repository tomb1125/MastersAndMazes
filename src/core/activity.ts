import { AbilityObject } from "../components/abilityObject.js";
import { DescriptiveNumber } from "../components/descriptiveNumber.js";
import { Modifier } from "../modifiers/modifier.js";
import { Ability } from "./ability.js";
export class Activity extends Ability {
    range : number;
    modifiers: Modifier[];
    longDescription: String;

    constructor(otherName?: string) {
      super(otherName);
      this.longDescription = '';
    }

    override generate() {

    }

    protected renderCard(variant: string, name: string, stats: [string, string][], coreDescription: string, longDescription?: boolean): string {
      return '<article class="ability ability--' + variant + '">' +
        '<h3 class="ability__name">' + name + '</h3>' +
        '<dl class="ability__stats">' +
          stats.filter(([, value]) => value !== '').map(([label, value]) =>
            '<div class="stat">' +
              '<dt class="stat__label">' + label + '</dt>' +
              '<dd class="stat__value">' + value + '</dd>' +
            '</div>'
          ).join('') +
        '</dl>' +
        (coreDescription ? '<p class="ability__core-description">' + coreDescription + '</p>' : '') +
        this.renderModifiers() +
        this.renderObjects() +
        this.renderDescriptiveNumbers() +
        (longDescription ? this.renderRulings() : '') +
      '</article>';
    }

    protected getObjects(): AbilityObject[] {
      return [];
    }

    protected getDescriptiveNumbers(): [string, DescriptiveNumber][] {
      return [];
    }

    protected renderModifiers(): string {
      if(this.modifiers.length === 0) {
        return '';
      }

      return '<section class="ability__modifiers">' +
        '<h4 class="ability__section-title">Modifiers</h4>' +
        '<ul class="modifier-list">' +
          this.modifiers.map(mod => {
            const type = Activity.getModifierTypeName(mod);
            const name = Activity.getModifierName(mod);

            return '<li class="modifier modifier--' + type.toLowerCase() + '">' +
              '<span class="modifier__type">' + type + '</span>' +
              (name === '' ? '' : '<span class="modifier__name">' + name + '</span>') +
              (mod.description ? '<span class="modifier__description">' + mod.description + '</span>' : '') +
            '</li>';
          }).join('') +
        '</ul>' +
      '</section>';
    }

    protected renderObjects(): string {
      const objects = this.getObjects();

      if(objects.length === 0) {
        return '';
      }

      return '<section class="ability__components">' +
        '<h4 class="ability__section-title">Components</h4>' +
        '<ul class="component-list">' +
          objects.map(obj =>
            '<li class="component">' +
              '<span class="component__name">' + obj.name + '</span>' +
              (obj.description ? '<span class="component__description">' + obj.description + '</span>' : '') +
            '</li>'
          ).join('') +
        '</ul>' +
      '</section>';
    }

    protected renderDescriptiveNumbers(): string {
      const described = this.getDescriptiveNumbers().filter(([, number]) => number && number.description);

      if(described.length === 0) {
        return '';
      }

      return '<section class="ability__values">' +
        '<h4 class="ability__section-title">Values</h4>' +
        '<ul class="value-list">' +
          described.map(([label, number]) =>
            '<li class="value">' +
              '<span class="value__type">' + label + '</span>' +
              DescriptiveNumber.renderMarker() +
              '<span class="value__description">' + number.getDescription() + '</span>' +
            '</li>'
          ).join('') +
        '</ul>' +
      '</section>';
    }

    protected renderRulings(): string {
      const ruledModifiers = this.modifiers.filter(mod => mod.longDescription);

      if(!this.longDescription && ruledModifiers.length === 0) {
        return '';
      }

      return '<section class="ability__rulings">' +
        '<h4 class="ability__section-title">Rulings</h4>' +
        (this.longDescription ? '<p class="ruling">' + this.longDescription + '</p>' : '') +
        (ruledModifiers.length === 0 ? '' :
          '<ul class="ruling-list">' +
            ruledModifiers.map(mod => {
              const name = Activity.getModifierName(mod);

              return '<li class="ruling">' +
                (name === '' ? '' : '<span class="ruling__source">' + name + '</span>') +
                '<span class="ruling__text">' + mod.longDescription + '</span>' +
              '</li>';
            }).join('') +
          '</ul>') +
      '</section>';
    }

    protected static getModifierName(mod: Modifier): string {
      const label = mod.namePrefix ? mod.namePrefix : mod.name;

      return label === undefined ? '' : label.trim();
    }

    protected static getModifierTypeName(mod: Modifier): string {
      return mod.modifierType === undefined
        ? Modifier.Type[Modifier.Type.Other]
        : Modifier.Type[mod.modifierType];
    }
  }
