import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import HighlightBlock from '@site/src/components/HighlightBlock';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  HighlightBlock:HighlightBlock,
};