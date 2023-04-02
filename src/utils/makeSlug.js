import slugify from 'slugify';
export const makeSlug = string => slugify(string, { lower: true });
