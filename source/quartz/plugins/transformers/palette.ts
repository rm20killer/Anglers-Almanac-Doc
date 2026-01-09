import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Code, HTML } from "mdast"

export const ColorPalette: QuartzTransformerPlugin = () => {
  return {
    name: "ColorPalette",
    markdownPlugins() {
      return [
        () => (tree) => {
          visit(tree, "code", (node: Code, index, parent) => {
            if (node.lang === "palette") {
              // Split by commas and clean up whitespace
              const colors = node.value
                .split(",")
                .map((s) => s.trim())
                .filter((s) => s.startsWith("#"))

              // Generate the HTML for the palette
              const htmlContent = `
<div class="color-palette-container">
  ${colors
    .map(
      (color) => `
    <div class="color-swatch-wrapper">
      <div class="color-swatch" style="background-color: ${color};"></div>
      <code class="color-code">${color}</code>
    </div>`,
    )
    .join("")}
</div>`

              // Replace the code block with raw HTML
              const newNode: HTML = {
                type: "html",
                value: htmlContent,
              }

              if (parent && index !== undefined) {
                parent.children.splice(index, 1, newNode)
              }
            }
          })
        },
      ]
    },
  }
}