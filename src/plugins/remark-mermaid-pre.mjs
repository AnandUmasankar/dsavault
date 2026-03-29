import { visit } from 'unist-util-visit';

/**
 * Rehype plugin that converts Shiki-processed mermaid code blocks back into
 * <pre class="mermaid"> elements that rehype-mermaid can process.
 * Must run before rehype-mermaid in the plugin chain.
 */
export default function rehypeMermaidPre() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!parent || node.tagName !== 'pre') return;

      // Check if this is a Shiki-processed mermaid block
      // Shiki outputs: <pre class="astro-code" data-language="mermaid" ...><code>...</code></pre>
      const lang = node.properties?.dataLanguage;
      if (lang !== 'mermaid') return;

      // Extract the text content from the code element inside
      const codeNode = node.children?.find(c => c.tagName === 'code');
      if (!codeNode) return;

      const text = extractText(codeNode);
      if (!text) return;

      // Replace with a simple <pre class="mermaid"> that rehype-mermaid recognizes
      parent.children[index] = {
        type: 'element',
        tagName: 'pre',
        properties: { className: ['mermaid'] },
        children: [{ type: 'text', value: text }],
      };
    });
  };
}

function extractText(node) {
  if (node.type === 'text') return node.value;
  if (node.children) return node.children.map(extractText).join('');
  return '';
}
