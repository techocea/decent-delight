import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'



export default defineConfig({
  name: 'Decent_Delight',
  title: 'Decent Delight online Bakery for you',
  projectId:"dgjekore",
  dataset:"production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
