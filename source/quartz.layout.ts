import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/rm20killer/Anglers-Almanac-Doc",
      Twitter: "https://twitter.com/rm20killer",
      Donate: "https://github.com/sponsors/rm20killer",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({

        sortFn: (a, b) => {
          const nameOrderMap: Record<string, number> = {
            "configs/_configs": 1,
          }
          let orderA = nameOrderMap[a.file?.slug ?? a.name] || 9999
          let orderB = nameOrderMap[b.file?.slug ?? b.name] || 9999
          if (orderA !== orderB) {
            return orderA - orderB
          }
          const nameA = a.name.toLowerCase()
          const nameB = b.name.toLowerCase()
          if (nameA.startsWith("_") && !nameB.startsWith("_")) return -1
          if (!nameA.startsWith("_") && nameB.startsWith("_")) return 1
          return nameA.localeCompare(nameB)
        },
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
