// ─────────────────────────────────────────────────────────
//  Barrel — agrega aquí cada nuevo blog que crees
// ─────────────────────────────────────────────────────────
import type { Blog } from '../../services/blog.models';

import { blog1 } from './static-1';
import { blog2 } from './static-2';
import { blog3 } from './static-3';
import { blog4 } from './static-4';
import { blogTaxonomiaCASE } from './taxonomia-case';

export const STATIC_BLOGS: Blog[] = [blog1, blog2, blog3, blog4, blogTaxonomiaCASE];
