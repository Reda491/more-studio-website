export default {
  name: 'project',
  title: 'Architecture Projects',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Name', type: 'string' },
    { 
      name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      options: { source: 'title' } 
    },
    { 
      name: 'coverImage', 
      title: 'Main Photo', 
      type: 'image', 
      options: { hotspot: true } // Allows architectural focal points
    },
    {
      name: 'details',
      title: 'Technical Details',
      type: 'object',
      fields: [
        { name: 'location', title: 'Location', type: 'string' },
        { name: 'year', title: 'Year', type: 'string' },
        { name: 'area', title: 'Surface Area', type: 'string' }
      ]
    },
    { name: 'description', title: 'Project Story', type: 'text' }
  ]
}