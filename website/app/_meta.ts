import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: {
    display: "hidden",
    theme: {
      layout: 'full',
      sidebar: false,
      toc: false,
      timestamp: false,
      breadcrumb: false,
      copyPage: false
    }
  },
  docs: {
    type: 'page',
    href: 'docs',
    title: 'Docs'
  },
}

export default meta
