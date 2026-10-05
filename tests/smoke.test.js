import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'woodwork',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Furniture and woodwork',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'f88193ec-c618-5df9-8728-cdb15d419ec4',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'd0a3b10b-ba8a-5ee3-9680-fb2f69ed64e7',
    dynasty: {
      item: '96854149-8a79-55f2-9035-739e18d2ab29',
      name: 'Other Dynasties',
    },
    timeline: {
      code: 'es',
      id: 'esp',
      country: 'Spain',
    },
    partner: {
      id: '40411e66-c284-545a-b2ef-8e0e8a2c7f6e',
      name: 'MKG Museum for Applied Arts',
      city: 'Hamburg',
      country: 'Germany',
      objects: 3,
    },
  },
})
