import { defineField, defineType } from "sanity"

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    }
                },
            ],
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 96,
            },
        }),
        defineField({
          name: 'categories',
          title: 'Categories',
          type: 'array',
          of: [{type: 'reference', to: {type: 'category'}}],
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
        }),
        defineField({
            name: 'variants',
            title: 'Variants',
            type: 'array',
            of: [{type: 'reference', to: {type: 'product'}}],
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'discount',
            title: 'Discount',
            type: 'number',
        }),
        defineField({
            name: 'sizes',
            title: 'Sizes',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'size',
                    title: 'Size',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'quantity',
                            title: 'Quantity',
                            type: 'number',
                        })
                    ]
                },
            ],
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'products',
            title: 'Related products',
            type: 'array',
            of: [{type: 'reference', to: {type: 'product'}}],
        }),
    ]
})