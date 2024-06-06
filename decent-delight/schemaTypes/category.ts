export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Category',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name:"categorySlug",
      type:"slug",
      title:"Category Slug",
      options:{
          source:"name"
      }
  },
  ],
}
