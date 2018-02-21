import { chain, mergeWith } from '@angular-devkit/schematics';
import { vgOptions } from './schema';
import { apply, filter, move, Rule, template, url, branchAndMerge } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';

function filterTemplates(options: vgOptions): Rule {
  if (!options.vgService) {
    return filter(path => !path.match(/\.service\.ts$/) && !path.match(/-item\.ts$/) && !path.match(/\.bak$/));
  }
  return filter(path => !path.match(/\.bak$/));
}

export default function (options: vgOptions): Rule {

    // TODO: Validate options and throw SchematicsException if validation fails
    options.path = options.path ? normalize(options.path) : options.path;
    
    const templateSource = apply(url('./files'), [
        filterTemplates(options),
        template({...options}),
        move(options.sourceDir)
      ]);
      
      return chain([
        branchAndMerge(chain([
          mergeWith(templateSource)
        ])),
      ]);

}